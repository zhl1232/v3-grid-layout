# 发布指南

## 一次性配置（推荐：Trusted Publishing）

在 [npm 包设置页](https://www.npmjs.com/package/v3-grid-layout/settings) 配置 **Trusted Publisher**，让 GitHub Actions 通过 OIDC 直接发布，无需 `NPM_TOKEN`：

| 字段 | 值 |
|------|-----|
| Provider | GitHub Actions |
| Repository owner | `zhl1232` |
| Repository name | `v3-grid-layout` |
| Workflow filename | `release.yml` |
| Environment name | 留空 |

路径：**npm 包页 → Settings → Publishing access → Trusted publishers → Add**

仓库 **About** 建议填写：

| 字段 | 值 |
|------|-----|
| Description | Vue 3 draggable and resizable grid layout component library |
| Website | https://zhl1232.github.io/v3-grid-layout/ |
| Topics | `vue3`, `vue`, `grid-layout`, `typescript`, `draggable`, `resizable`, `storybook` |

### 备选：NPM_TOKEN

若不用 Trusted Publishing，可在 GitHub **Settings → Secrets → Actions → Repository secrets** 添加 `NPM_TOKEN`（Granular token，需 **Read and write** + **Bypass 2FA**），并在 workflow 中恢复 `NODE_AUTH_TOKEN` 环境变量。

## 发布流程

1. 更新 `package.json` 中的 `version`
2. （可选）在 `CHANGELOG.md` 添加对应版本的更新说明
3. 提交并推送到 `master`
4. 打 tag 并推送，触发自动发布：

```bash
git tag v2.0.0
git push origin v2.0.0
```

推送 tag 后，[Release workflow](.github/workflows/release.yml) 会依次执行：

- lint / typecheck / test / build
- 发布到 [npm](https://www.npmjs.com/package/v3-grid-layout)
- 创建 [GitHub Release](https://github.com/zhl1232/v3-grid-layout/releases)

## 包名说明

npm 包名为 **`v3-grid-layout`**（仓库所有者名下已有此包）。`vue-grid-layout-next` 在 npm 上已被他人占用，因此统一使用 `v3-grid-layout`。

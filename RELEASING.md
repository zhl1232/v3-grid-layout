# 发布指南

## 一次性配置

在 GitHub 仓库 **Settings → Secrets and variables → Actions** 中添加：

| Secret | 说明 |
|--------|------|
| `NPM_TOKEN` | [npm Access Token](https://www.npmjs.com/settings/~tokens)（Automation 类型，需 publish 权限） |

仓库 **About** 建议填写：

| 字段 | 值 |
|------|-----|
| Description | Vue 3 draggable and resizable grid layout component library |
| Website | https://zhl1232.github.io/v3-grid-layout/ |
| Topics | `vue3`, `vue`, `grid-layout`, `typescript`, `draggable`, `resizable`, `storybook` |

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

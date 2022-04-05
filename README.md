[原仓库](https://github.com/jbaysolutions/vue-grid-layout)一直没人重写 vue3 版本，所以我自己写了一个。

本仓库使用 vue3 语法 和 TS 重构，修复了一些 v2 版本的 BUG。

# [文档](https://zhl1232.github.io/v3-grid-layout/)

# 安装

```shell
pnpm install v3-grid-layout
```


# 使用

1.  全局注册  
在 main.ts 中引用
```js
import { createApp } from 'vue'
import App from './App.vue'
import GridLayout from 'v3-grid-layout'
import 'v3-grid-layout/dist/style.css'
const app = createApp(App)
app.use(GridLayout).mount("#app")
```
2. 局部注册
```vue
<script setup lang="ts">
import { GridItem, GridLayout } from "v3-grid-layout";
import type { Layout } from "v3-grid-layout/dist/helpers/utils";
import "v3-grid-layout/dist/style.css";
const layout: Layout = [
  { x: 0, y: 0, w: 2, h: 2, i: "0", static: false, minH: 5 },
  { x: 2, y: 0, w: 2, h: 4, i: "1", static: true },
  { x: 4, y: 0, w: 2, h: 5, i: "2", static: false },
  { x: 6, y: 0, w: 2, h: 3, i: "3", static: false },
  { x: 8, y: 0, w: 2, h: 3, i: "4", static: false },
  { x: 10, y: 0, w: 2, h: 3, i: "5", static: false },
  { x: 0, y: 5, w: 2, h: 5, i: "6", static: false },
  { x: 2, y: 5, w: 2, h: 5, i: "7", static: false },
  { x: 4, y: 5, w: 2, h: 5, i: "8", static: false },
  { x: 6, y: 3, w: 2, h: 4, i: "9", static: true },
];
</script>

<template>
  <grid-layout
    v-model:layout="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
  >
    <grid-item
      v-for="item in layout"
      :key="item.i"
      drag-allow-from=".toolbox"
      v-bind="item"
    >
      <div style="display: flex; flex-direction: column; height: 100%">
        <div
          class="toolbox"
          style="
            width: 100%;
            height: 20px;
            text-align: center;
            background-color: bisque;
          "
        >
          drag
        </div>
        <div style="height: 100%; text-align: center; background-color: #eee">
          {{ item.i }}
          <br />
          static:{{ item.static }}
        </div>
      </div>
    </grid-item>
  </grid-layout>
</template>

```

# TODO

[x] 支持 TS  
[x] vue3 setup 语法  
[ ] BUG：vue2 版本高度计算 rowHeight 不只计算了 item 的高度，还把 margin 乘进去了，导致高度和栅格高度预期不符  
[x] BUG：vue2 版本镜像反转后，拖拽会有限制  
[ ] 文档优化
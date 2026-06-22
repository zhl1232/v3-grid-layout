# vue-grid-layout-next

A powerful, draggable, and resizable grid layout component built natively for **Vue 3** and **TypeScript**.

[![npm version](https://img.shields.io/npm/v/vue-grid-layout-next.svg)](https://www.npmjs.com/package/vue-grid-layout-next)
[![GitHub license](https://img.shields.io/github/license/zhl1232/v3-grid-layout.svg)](LICENSE)

> Also known as **v3-grid-layout** in documentation and legacy references.

**[📖 Live documentation (Storybook)](https://zhl1232.github.io/v3-grid-layout/)**

## Why vue-grid-layout-next?

The original [`vue-grid-layout`](https://github.com/jbaysolutions/vue-grid-layout) library has been abandoned for years and lacks official Vue 3 support. This project is a modernized successor with Composition API, TypeScript, and Vite-friendly builds.

## Install

```bash
npm install vue-grid-layout-next
# or
pnpm add vue-grid-layout-next
# or
yarn add vue-grid-layout-next
```

`vue` ^3.5.0 is required as a peer dependency. Node.js >= 20.19 is required for development.

## Quick Start

### Global registration

```ts
import { createApp } from 'vue'
import App from './App.vue'
import GridLayoutPlugin from 'vue-grid-layout-next'
import 'vue-grid-layout-next/dist/style.css'

createApp(App).use(GridLayoutPlugin).mount('#app')
```

### Local registration

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GridItem, GridLayout } from 'vue-grid-layout-next'
import type { Layout } from 'vue-grid-layout-next'
import 'vue-grid-layout-next/dist/style.css'

const layout = ref<Layout>([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 4, i: '1', static: true }
])
</script>

<template>
  <GridLayout
    v-model:layout="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :margin="[10, 10]"
  >
    <GridItem
      v-for="item in layout"
      :key="item.i"
      drag-allow-from=".handle"
      v-bind="item"
    >
      <div class="handle">Drag handle</div>
      <div>{{ item.i }}</div>
    </GridItem>
  </GridLayout>
</template>
```

## Key Features

- Vue 3 Composition API with strict TypeScript types
- Draggable and resizable grid items via [interact.js](https://interactjs.io/)
- Responsive layouts with configurable breakpoints
- Per-item drag/resize overrides (`is-draggable` / `is-resizable`)
- Fixed pixel sizing via `col-width`, `pixel-width`, and `pixel-height`
- External drag-in support via exposed `dragEvent` / `resizeEvent`

## API Overview

The full API reference (props, events, expose methods, and layout types) lives in the [Storybook docs](https://zhl1232.github.io/v3-grid-layout/?path=/docs/api-参考--docs).

| Component | Highlights |
|-----------|------------|
| **GridLayout** | `v-model:layout`, `col-num`, `row-height`, `responsive`, `breakpoints`, `prevent-collision` |
| **GridItem** | `i`, `x`, `y`, `w`, `h`, `static`, `drag-allow-from`, `pixel-width`, `pixel-height` |

### Layout type

```ts
import type { Layout, LayoutItem } from 'vue-grid-layout-next'

const item: LayoutItem = { i: 'a', x: 0, y: 0, w: 2, h: 2 }
const layout: Layout = [item]
```

## Development

```bash
git clone https://github.com/zhl1232/v3-grid-layout.git
cd v3-grid-layout
npm ci
npm run start      # local demo at http://localhost:9018
npm run storybook  # component docs at http://localhost:6006
```

| Command | Description |
|---------|-------------|
| `npm run start` | Local demo on port 9018 |
| `npm run build:lib` | Build library to `dist/` |
| `npm run build:doc` | Build Storybook static site |
| `npm run test` | Run unit tests |
| `npm run lint` | Lint with oxlint (Oxc) |
| `npm run format` | Format with oxfmt (Oxc) |
| `npm run typecheck` | TypeScript type checking |
| `npm run audit` | Audit all dependencies |
| `npm run audit:prod` | Audit production dependencies only |
| `npm run storybook` | Component documentation |

## Related Projects

- [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout) — original Vue 2 library
- [v3-grid-layout](https://github.com/zhl1232/v3-grid-layout) — this repository

## License

[MIT](LICENSE)

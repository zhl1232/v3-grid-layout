# vue-grid-layout-next

A powerful, draggable, and resizable grid layout component built natively for **Vue 3** and **TypeScript**.

[![npm version](https://img.shields.io/npm/v/vue-grid-layout-next.svg)](https://www.npmjs.com/package/vue-grid-layout-next)
[![GitHub license](https://img.shields.io/github/license/zhoulujun/v3-grid-layout.svg)](LICENSE)

> Also known as **v3-grid-layout** in documentation and legacy references.

## Why vue-grid-layout-next?

The original `vue-grid-layout` library has been abandoned for years and lacks official Vue 3 support. This project is a modernized successor with Composition API, TypeScript, and Vite-friendly builds.

## Install

```bash
npm install vue-grid-layout-next
```

`vue` ^3.2.0 is required as a peer dependency.

## Quick Start

```ts
import { createApp } from 'vue';
import GridLayoutPlugin, { GridLayout, GridItem } from 'vue-grid-layout-next';
import 'vue-grid-layout-next/dist/style.css';

const app = createApp(App);

// Global registration
app.use(GridLayoutPlugin);

// Or local registration
app.component('GridLayout', GridLayout);
app.component('GridItem', GridItem);
```

```vue
<template>
  <GridLayout
    v-model:layout="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
  >
    <GridItem
      v-for="item in layout"
      :key="item.i"
      v-bind="item"
    >
      {{ item.i }}
    </GridItem>
  </GridLayout>
</template>
```

## Key Features

- Vue 3 Composition API with strict TypeScript types
- Draggable and resizable grid items via interact.js
- Responsive layouts with configurable breakpoints
- Per-item drag/resize overrides (`is-draggable` / `is-resizable`)
- Fixed pixel sizing via `col-width`, `pixel-width`, and `pixel-height`
- External drag-in support via exposed `dragEvent` / `resizeEvent`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Local demo on port 9018 |
| `npm run build:lib` | Build library to `dist/` |
| `npm run test` | Run unit tests |
| `npm run audit:prod` | Audit production dependencies only |
| `npm run storybook` | Component documentation |

## License

[MIT](LICENSE)

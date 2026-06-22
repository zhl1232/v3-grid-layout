import type { ArgTypes } from '@storybook/vue3-vite'

export const gridLayoutArgTypes: ArgTypes = {
  layout: {
    control: false,
    description: '栅格布局数据。每项必须包含 `i`、`x`、`y`、`w`、`h` 属性。'
  },
  autoSize: {
    description: 'Layout 容器是否自动调整大小，以容纳所有 Item。'
  },
  colNum: {
    description: '定义栅格系统的列数。',
    control: { type: 'number', min: 1 }
  },
  rowHeight: {
    description: '栅格每行的高度，单位像素。',
    control: { type: 'number', min: 1 }
  },
  colWidth: {
    description:
      '栅格每列的固定宽度（像素）。设置后列宽不再随容器宽度自动分配，可与 rowHeight 配合实现固定像素栅格单元。'
  },
  maxRows: {
    description: '最大行数。'
  },
  margin: {
    description: '元素边距 `[水平, 垂直]`，单位像素。'
  },
  isDraggable: {
    description: '栅格中的元素是否可拖拽。'
  },
  isResizable: {
    description: '栅格中的元素是否可调整大小。'
  },
  isMirrored: {
    description: '栅格中的元素是否可镜像反转（RTL）。'
  },
  useCssTransforms: {
    description: '是否使用 CSS `transform` 进行定位。'
  },
  verticalCompact: {
    description: '布局是否垂直压缩（消除纵向空隙）。'
  },
  responsive: {
    description: '布局是否为响应式。'
  },
  responsiveLayouts: {
    control: false,
    description:
      '响应式模式下各断点的初始布局，键为断点名称，值为 Layout 数组。创建 GridLayout 之后设置无效。'
  },
  breakpoints: {
    control: false,
    description: '响应式布局的断点宽度映射，默认 `{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }`。'
  },
  responsiveCols: {
    control: false,
    description: '各断点对应的列数，默认 `{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }`。'
  },
  preventCollision: {
    description: '为 `true` 时，元素只能拖动至空白处，不会推开其他元素。'
  }
}

export const gridItemArgTypes: ArgTypes = {
  i: { description: '元素唯一标识，字符串或数字。' },
  x: { description: '元素所在的列（从 0 开始）。' },
  y: { description: '元素所在的行（从 0 开始）。' },
  w: { description: '元素宽度（栅格列数）。' },
  h: { description: '元素高度（栅格行数）。' },
  static: { description: '是否为静态元素（不可拖拽、不可缩放）。' },
  minW: { description: '最小宽度（列数）。' },
  minH: { description: '最小高度（行数）。' },
  maxW: { description: '最大宽度（列数）。' },
  maxH: { description: '最大高度（行数）。' },
  isDraggable: { description: '覆盖父级 GridLayout 的 `isDraggable`，`null` 表示继承。' },
  isResizable: { description: '覆盖父级 GridLayout 的 `isResizable`，`null` 表示继承。' },
  dragIgnoreFrom: { description: '拖拽时忽略的选择器，默认 `a, button`。' },
  dragAllowFrom: { description: '仅允许从匹配该选择器的区域开始拖拽。' },
  resizeIgnoreFrom: { description: '缩放时忽略的选择器，默认 `a, button`。' },
  pixelWidth: { description: '固定像素宽度，设置后不再随容器宽度变化。' },
  pixelHeight: { description: '固定像素高度，设置后不再随 rowHeight 变化。' }
}

import type { Meta, StoryObj } from '@storybook/vue3-vite'
import GridLayout from '../../packages/GridLayout'
import GridItem from '../../packages/GridItem'
import { gridLayoutArgTypes } from './argTypes'
import { collisionLayout, defaultLayout, gridItemSlot, pixelLayout } from './shared'

const meta = {
  title: 'GridLayout',
  component: GridLayout,
  tags: ['autodocs'],
  argTypes: gridLayoutArgTypes,
  parameters: {
    docs: {
      description: {
        component:
          '可拖拽、可缩放的栅格布局容器。通过 `v-model:layout` 双向绑定布局数据，内部使用 `GridItem` 渲染每个栅格单元。'
      }
    }
  }
} satisfies Meta<typeof GridLayout>

export default meta

type Story = StoryObj<typeof meta>

const baseArgs = {
  colNum: 12,
  rowHeight: 30,
  margin: [10, 10] as [number, number],
  layout: defaultLayout,
  isDraggable: true,
  isResizable: true,
  isMirrored: false,
  verticalCompact: true,
  useCssTransforms: true,
  preventCollision: false,
  responsive: false
}

function renderGrid(extraItemAttrs: Record<string, unknown> = {}) {
  return (args: typeof baseArgs) => ({
    components: { GridLayout, GridItem },
    setup() {
      return { args, extraItemAttrs }
    },
    template: `
      <grid-layout v-bind="args">
        <grid-item
          v-for="item in args.layout"
          :key="item.i"
          drag-allow-from=".toolbox"
          v-bind="{ ...item, ...extraItemAttrs }"
        >
          ${gridItemSlot}
        </grid-item>
      </grid-layout>
    `
  })
}

/** 基础可拖拽、可缩放的栅格布局。按 `D` 可打开 Controls 面板调整参数。 */
export const Default: Story = {
  args: baseArgs,
  render: renderGrid()
}

/** 部分元素设置 `static: true`，不可拖拽也不可缩放。 */
export const StaticItems: Story = {
  args: {
    ...baseArgs,
    layout: defaultLayout.map(item => ({ ...item }))
  },
  parameters: {
    docs: {
      description: {
        story: '在 layout 数据项上设置 `static: true`，或在 GridItem 上设置 `static` prop。'
      }
    }
  },
  render: renderGrid()
}

/** 开启 `preventCollision` 后，拖拽时元素只能移动到空白区域。 */
export const PreventCollision: Story = {
  args: {
    ...baseArgs,
    layout: collisionLayout,
    preventCollision: true
  },
  parameters: {
    docs: {
      description: {
        story: '适合需要保留精确位置、不允许元素互相挤压的场景。'
      }
    }
  },
  render: renderGrid()
}

/** 通过 `colWidth` 与 GridItem 的 `pixelWidth` / `pixelHeight` 实现固定像素尺寸。 */
export const FixedPixelSize: Story = {
  args: {
    ...baseArgs,
    colNum: 6,
    rowHeight: 60,
    colWidth: 60,
    margin: [8, 8] as [number, number],
    layout: pixelLayout
  },
  parameters: {
    docs: {
      description: {
        story:
          '设置 `colWidth` 后列宽固定；在 GridItem 上设置 `pixelWidth` / `pixelHeight` 可进一步固定单个元素的像素尺寸。'
      }
    }
  },
  render: (args) => ({
    components: { GridLayout, GridItem },
    setup() {
      return { args }
    },
    template: `
      <grid-layout v-bind="args">
        <grid-item
          v-for="item in args.layout"
          :key="item.i"
          v-bind="item"
          :pixel-width="item.i === 'd' ? 120 : 60"
          :pixel-height="item.i === 'd' ? 120 : 60"
        >
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #e3f2fd">
            {{ item.i }}
          </div>
        </grid-item>
      </grid-layout>
    `
  })
}

/** 仅允许从 `.toolbox` 区域拖拽，避免误触内容区域。 */
export const DragHandle: Story = {
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: '通过 GridItem 的 `drag-allow-from`（对应 prop `dragAllowFrom`）限制拖拽手柄。'
      }
    }
  },
  render: renderGrid()
}

/** 关闭拖拽与缩放，作为只读布局展示。 */
export const ReadOnly: Story = {
  args: {
    ...baseArgs,
    isDraggable: false,
    isResizable: false
  },
  parameters: {
    docs: {
      description: {
        story: '将 `isDraggable` 与 `isResizable` 设为 `false` 即可禁用交互。'
      }
    }
  },
  render: renderGrid()
}

import type { Layout } from '../../packages/helpers/utils'

/** 文档示例用的默认布局 */
export const defaultLayout: Layout = [
  { x: 0, y: 0, w: 2, h: 2, i: '0', static: false, minH: 2 },
  { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
  { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
  { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
  { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
  { x: 10, y: 0, w: 2, h: 3, i: '5', static: false },
  { x: 0, y: 5, w: 2, h: 5, i: '6', static: false },
  { x: 2, y: 5, w: 2, h: 5, i: '7', static: false },
  { x: 4, y: 5, w: 2, h: 5, i: '8', static: false },
  { x: 6, y: 3, w: 2, h: 4, i: '9', static: true }
]

/** 为 Story 创建独立布局副本，避免 autodocs 多实例共享同一引用 */
export function cloneStoryLayout(layout: Layout): Layout {
  return layout.map(item => ({ ...item }))
}

/** 固定像素尺寸示例布局 */
export const pixelLayout: Layout = [
  { x: 0, y: 0, w: 1, h: 1, i: 'a' },
  { x: 1, y: 0, w: 1, h: 1, i: 'b' },
  { x: 2, y: 0, w: 1, h: 1, i: 'c' },
  { x: 0, y: 1, w: 2, h: 2, i: 'd' }
]

/** 防碰撞示例布局 */
export const collisionLayout: Layout = [
  { x: 0, y: 0, w: 3, h: 3, i: '0' },
  { x: 3, y: 0, w: 3, h: 3, i: '1' },
  { x: 6, y: 0, w: 3, h: 3, i: '2' },
  { x: 0, y: 3, w: 12, h: 2, i: '3' }
]

export const gridItemSlot = `
  <div style="display: flex; flex-direction: column; height: 100%">
    <div
      class="toolbox"
      style="width: 100%; height: 20px; text-align: center; background-color: bisque; cursor: move"
    >
      drag
    </div>
    <div style="flex: 1; display: flex; align-items: center; justify-content: center; background-color: #eee">
      {{ item.i }}
      <template v-if="item.static"><br />static</template>
    </div>
  </div>
`

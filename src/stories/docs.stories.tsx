import type { StoryObj } from '@storybook/vue3'
import GridLayout from '../../packages/GridLayout'
import GridItem from '../../packages/GridItem'
import type { Layout } from '../../packages/helpers/utils'

const layout: Layout = [
  { x: 0, y: 0, w: 2, h: 2, i: '0', static: false, minH: 5 },
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

const meta = {
  title: '文档',
  component: GridLayout,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: false }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    colNum: 12,
    rowHeight: 30,
    margin: [10, 10],
    layout,
    isDraggable: true,
    isResizable: true,
    isMirrored: false,
    verticalCompact: true,
    useCssTransforms: true
  },
  render: args => ({
    components: { GridLayout, GridItem },
    setup() {
      return { args }
    },
    template: `
      <grid-layout v-bind="args">
        <grid-item
          v-for="item in args.layout"
          :key="item.i"
          drag-allow-from=".toolbox"
          v-bind="item"
        >
          <div style="display: flex; flex-direction: column; height: 100%">
            <div class="toolbox" style="width: 100%; height: 20px; text-align: center; background-color: bisque">drag</div>
            <div style="height: 100%; text-align: center; background-color: #eee">
              {{ item.i }}
              <br />
              static:{{ item.static }}
            </div>
          </div>
        </grid-item>
      </grid-layout>
    `
  })
}

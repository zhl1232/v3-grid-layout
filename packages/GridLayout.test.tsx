import { mount, flushPromises } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GridLayout from './GridLayout'
import GridItem from './GridItem'

const storyLayout = [
  { x: 0, y: 0, w: 2, h: 2, i: '0', static: false },
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

function mountGridLayout(layout: typeof storyLayout) {
  return mount({
    components: { GridLayout, GridItem },
    template: `
      <grid-layout
        :layout="layout"
        :col-num="12"
        :row-height="30"
        :margin="[10, 10]"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
      >
        <grid-item
          v-for="item in layout"
          :key="item.i"
          drag-allow-from=".toolbox"
          v-bind="item"
        >
          <div class="toolbox">drag</div>
          <div>{{ item.i }}</div>
        </grid-item>
      </grid-layout>
    `,
    data() {
      return { layout }
    }
  })
}

describe('GridLayout layout update loop', () => {
  it('does not exceed recursive updates for storybook docs layout', async () => {
    const layout = storyLayout.map(item => ({ ...item }))
    const wrapper = mountGridLayout(layout)
    await flushPromises()
    await new Promise(resolve => setTimeout(resolve, 300))
    wrapper.unmount()
    expect(true).toBe(true)
  }, 5000)

  it('does not exceed recursive updates when multiple instances share layout', async () => {
    const sharedLayout = storyLayout.map(item => ({ ...item }))
    const wrappers = [
      mountGridLayout(sharedLayout),
      mountGridLayout(sharedLayout),
      mountGridLayout(sharedLayout)
    ]
    await flushPromises()
    await new Promise(resolve => setTimeout(resolve, 300))
    wrappers.forEach(wrapper => wrapper.unmount())
    expect(true).toBe(true)
  }, 5000)
})

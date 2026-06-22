import { describe, expect, it } from 'vitest'
import {
  bottom,
  cloneLayout,
  cloneLayoutItem,
  collides,
  compact,
  correctBounds,
  getLayoutItem,
  moveElement,
  validateLayout,
  type Layout,
  type LayoutItem
} from './utils'

const sampleLayout: Layout = [
  { i: 'a', x: 0, y: 0, w: 2, h: 2 },
  { i: 'b', x: 2, y: 0, w: 2, h: 2 },
  { i: 'c', x: 0, y: 2, w: 4, h: 2, static: true }
]

describe('layout utils', () => {
  it('calculates bottom coordinate', () => {
    expect(bottom(sampleLayout)).toBe(4)
  })

  it('clones layout items without sharing references', () => {
    const item: LayoutItem = { i: 'x', x: 1, y: 2, w: 3, h: 4, moved: true }
    const cloned = cloneLayoutItem(item)
    expect(cloned.i).toBe(item.i)
    expect(cloned.x).toBe(item.x)
    expect(cloned.moved).toBe(true)
    expect(cloned.static).toBe(false)
    expect(cloned).not.toBe(item)
  })

  it('detects collisions', () => {
    const a: LayoutItem = { i: '1', x: 0, y: 0, w: 2, h: 2 }
    const b: LayoutItem = { i: '2', x: 1, y: 1, w: 2, h: 2 }
    const c: LayoutItem = { i: '3', x: 2, y: 0, w: 2, h: 2 }
    expect(collides(a, b)).toBe(true)
    expect(collides(a, c)).toBe(false)
    expect(collides(a, a)).toBe(false)
  })

  it('compacts layout vertically', () => {
    const layout: Layout = [
      { i: 'a', x: 0, y: 2, w: 2, h: 2 },
      { i: 'b', x: 2, y: 0, w: 2, h: 2 }
    ]
    const compacted = compact(layout, true)
    expect(compacted[0].y).toBe(0)
    expect(compacted[1].y).toBe(0)
  })

  it('corrects bounds overflow', () => {
    const layout: Layout = [{ i: 'a', x: 10, y: 0, w: 4, h: 2 }]
    const corrected = correctBounds(cloneLayout(layout), { cols: 12 })
    expect(corrected[0].x).toBe(8)
  })

  it('moves elements and resolves collisions', () => {
    const layout = cloneLayout(sampleLayout)
    const item = getLayoutItem(layout, 'a')!
    moveElement(layout, item, 2, 0, true, false)
    expect(getLayoutItem(layout, 'a')!.x).toBe(2)
  })

  it('validates layout shape', () => {
    expect(() => validateLayout(sampleLayout)).not.toThrow()
    expect(() => validateLayout(null as unknown as Layout)).toThrow()
  })

  it('compact is idempotent on storybook default layout subset', () => {
    const layout: Layout = [
      { x: 0, y: 0, w: 2, h: 2, i: '0', static: false },
      { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
      { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
      { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
      { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
      { x: 10, y: 0, w: 2, h: 3, i: '5', static: false },
      { x: 0, y: 5, w: 2, h: 5, i: '6', static: false }
    ]
    const snapshot = (items: Layout) =>
      JSON.stringify(items.map(({ i, x, y, w, h, moved }) => ({ i, x, y, w, h, moved })))
    compact(layout, true)
    const afterFirst = snapshot(layout)
    compact(layout, true)
    expect(snapshot(layout)).toBe(afterFirst)
  })
})

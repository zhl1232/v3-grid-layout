<template>
  <div>
    <div ref="eventsRoot" class="eventsJSON">
      <div v-for="(event, index) in eventLog" :key="index">
        {{ event }}
      </div>
    </div>
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
      @layout-created="layoutCreatedEvent"
      @layout-before-mount="layoutBeforeMountEvent"
      @layout-mounted="layoutMountedEvent"
      @layout-ready="layoutReadyEvent"
      @layout-updated="layoutUpdatedEvent"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        drag-allow-from=".toolbox"
        v-bind="item"
        @resize="resizeEvent"
        @move="moveEvent"
        @resized="resizedEvent"
        @container-resized="containerResizedEvent"
        @moved="movedEvent"
      >
        <div style="display: flex; flex-direction: column; height: 100%">
          <div class="toolbox" style="width: 100%; height: 20px; text-align: center; background-color: bisque">
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
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref, watch } from 'vue'
import { Layout } from '../helpers/utils'

const layout = reactive<Layout>([
  { x: 0, y: 0, w: 2, h: 2, i: '0', static: false, minH: 5 },
  { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
  { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
  { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
  { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
  { x: 10, y: 0, w: 2, h: 3, i: '5', static: false },
  { x: 0, y: 5, w: 2, h: 5, i: '6', static: false },
  { x: 2, y: 5, w: 2, h: 5, i: '7', static: false },
  { x: 4, y: 5, w: 2, h: 5, i: '8', static: false },
  { x: 6, y: 3, w: 2, h: 4, i: '9', static: true },
  { x: 8, y: 4, w: 2, h: 4, i: '10', static: false },
  { x: 10, y: 4, w: 2, h: 4, i: '11', static: false },
  { x: 0, y: 10, w: 2, h: 5, i: '12', static: false },
  { x: 2, y: 10, w: 2, h: 5, i: '13', static: false },
  { x: 4, y: 8, w: 2, h: 4, i: '14', static: false },
  { x: 6, y: 8, w: 2, h: 4, i: '15', static: false },
  { x: 8, y: 10, w: 2, h: 5, i: '16', static: false },
  { x: 10, y: 4, w: 2, h: 2, i: '17', static: false },
  { x: 0, y: 9, w: 2, h: 3, i: '18', static: false },
  { x: 2, y: 6, w: 2, h: 2, i: '19', static: false }
])
const eventLog = ref<string[]>([])
const eventsRoot = ref<HTMLElement | null>(null)
watch(
  eventLog,
  () => {
    nextTick(() => {
      if (eventsRoot.value) {
        eventsRoot.value.scrollTop = eventsRoot.value.scrollHeight
      }
    })
  },
  { deep: true }
)
function moveEvent(i: string, newX: string, newY: string) {
  const msg = 'MOVE i=' + i + ', X=' + newX + ', Y=' + newY
  eventLog.value.push(msg)
}
function movedEvent(i: string, newX: string, newY: string) {
  const msg = 'MOVED i=' + i + ', X=' + newX + ', Y=' + newY
  eventLog.value.push(msg)
}
function resizeEvent(i: string, newH: string, newW: string, newHPx: string, newWPx: string) {
  const msg = 'RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx
  eventLog.value.push(msg)
}
function resizedEvent(i: string, newX: string, newY: string, newHPx: string, newWPx: string) {
  const msg = 'RESIZED i=' + i + ', X=' + newX + ', Y=' + newY + ', H(px)=' + newHPx + ', W(px)=' + newWPx
  eventLog.value.push(msg)
}
function containerResizedEvent(i: string, newH: string, newW: string, newHPx: string, newWPx: string) {
  const msg = 'CONTAINER RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx
  eventLog.value.push(msg)
}
function layoutCreatedEvent(newLayout: Layout) {
  eventLog.value.push('Created layout', JSON.stringify(newLayout))
}
function layoutBeforeMountEvent(newLayout: Layout) {
  eventLog.value.push('beforeMount layout', JSON.stringify(newLayout))
}
function layoutMountedEvent(newLayout: Layout) {
  eventLog.value.push('Mounted layout', JSON.stringify(newLayout))
}
function layoutReadyEvent(newLayout: Layout) {
  eventLog.value.push('Ready layout', JSON.stringify(newLayout))
}
function layoutUpdatedEvent(newLayout: Layout) {
  eventLog.value.push('Updated layout', JSON.stringify(newLayout))
}
</script>
<style scoped>
.eventsJSON {
  height: 100px;
  padding: 10px;
  margin-top: 10px;
  overflow-y: scroll;
  background: #ddd;
  border: 1px solid black;
}
</style>

<template>
  <div>
    <div style="margin-top: 10px">
      <h4>Grid #1</h4>
      <grid-layout
        v-model:layout="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="item in layout"
          :key="item.i + 'layout'"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
        >
          <span class="text">{{ item.i }}</span>
        </grid-item>
      </grid-layout>
    </div>
    <div style="margin-top: 10px">
      <h4>Grid #2</h4>
      <grid-layout
        :layout="layout2"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="item in layout2"
          :key="item.i + 'layout2'"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
        >
          <span class="text">{{ item.i }}</span>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Layout } from '../helpers/utils'

const layout = reactive<Layout>([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 4, i: '1' }
])
const layout2 = reactive<Layout>([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 4, i: '1' },
  { x: 4, y: 0, w: 2, h: 2, i: '2' }
])
</script>

<style scoped>
.vue-grid-layout {
  background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  font-size: 24px;
  text-align: center;
}

.vue-grid-item .no-drag {
  width: 100%;
  height: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  padding: 0 8px 8px 0;
  cursor: pointer;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-origin: content-box;
}

.layoutJSON {
  padding: 10px;
  margin-top: 10px;
  background: #ddd;
  border: 1px solid black;
}

.eventsJSON {
  height: 100px;
  padding: 10px;
  margin-top: 10px;
  overflow-y: scroll;
  background: #ddd;
  border: 1px solid black;
}
</style>

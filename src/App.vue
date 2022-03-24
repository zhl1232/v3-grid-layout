<template>
  <div class="doc">
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { routes } from './router'
import { reactive } from 'vue'

const data = reactive({
  links: routes.map(item => ({
    path: item.path,
    name: item.title
  }))
})
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>

import { App, Plugin } from 'vue'
import GridItem from './GridLayout/GridItem.vue'
import GridLayout from './GridLayout/GridLayout.vue'

export const GridLayoutPlugin: Plugin = {
  install(app: App) {
    app.component('grid-item', GridItem)
    app.component('grid-layout', GridLayout)
  }
}

export default GridLayout as typeof GridLayout &
  Plugin & {
    readonly GridItem: typeof GridItem
  }

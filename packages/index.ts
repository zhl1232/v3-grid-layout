import { App, Plugin } from 'vue'
import GridItem from './GridItem.vue'
import GridLayout from './GridLayout.vue'

export { GridItem, GridLayout }
const GridLayoutPlugin: Plugin = {
  install(app: App) {
    app.component('grid-item', GridItem)
    app.component('grid-layout', GridLayout)
  }
}
export default GridLayoutPlugin

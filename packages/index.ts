import { App, Plugin } from 'vue';
import GridItem from './GridItem';
import GridLayout from './GridLayout';
import { eventBusKey } from './helpers/utils';
export { GridItem, GridLayout, eventBusKey };
const GridLayoutPlugin: Plugin = {
  install(app: App) {
    app.component('GridItem', GridItem);
    app.component('GridLayout', GridLayout);
  },
};
export default GridLayoutPlugin;

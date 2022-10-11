import { defineComponent,ref } from 'vue'
import { GridLayout, GridItem } from '../packages/index'

export default defineComponent({
    name: 'App',
    setup() {
        const layout = ref([
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
        ])
        return { layout }
    },
    render() {
        return (
            <GridLayout
                layout={this.layout}
                col-num={12}
                row-height={30}
                is-draggable={true}
                is-resizable={true}
                is-mirrored={false}
                vertical-compact={true}
                margin={[10, 10]}
                use-css-transforms={true}
            >
                {this.layout.map(item => (
                    <GridItem
                        key={item.i}
                        drag-allow-from='.toolbox'
                        i={item.i}
                        x={item.x}
                        y={item.y}
                        w={item.w}
                        h={item.h}
                        static={item.static}
                    >
                        <div class="box">
                            <div class="toolbox">drag</div>
                            <div class="item">
                                <div>{ item.i }</div>
                                <div>static:{ String(item.static) }</div>
                            </div>
                        </div>
                    </GridItem>
                ))}

            </GridLayout>
        )
    }
})

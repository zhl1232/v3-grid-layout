import { InjectionKey, Ref } from 'vue';
export declare type LayoutItem = {
    i: string | number;
    x: number;
    y: number;
    h: number;
    w: number;
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
    static?: boolean;
    moved?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
};
export declare type Layout = Array<LayoutItem>;
/**
 * 返回布局的 Bottom 坐标
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom 坐标.
 */
export declare function bottom(layout: Layout): number;
export declare function cloneLayoutItem(layoutItem: LayoutItem): LayoutItem;
/**
 * 克隆一个新的布局
 * @param layout
 * @returns newLayout
 */
export declare function cloneLayout(layout: Layout): Layout;
/**
 * Given two layoutitems, check if they collide.
 *
 * @return {Boolean}   True if colliding.
 */
export declare function collides(l1: LayoutItem, l2: LayoutItem): boolean;
/**
 * 紧凑布局，消除Y轴的间隙
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact 是否紧凑布局
 * @return {Array}       Compacted Layout.
 */
export declare function compact(layout: Layout, verticalCompact: boolean): Layout;
/**
 * Compact an item in the layout.
 */
export declare function compactItem(compareWith: Layout, l: LayoutItem, verticalCompact: boolean): LayoutItem;
/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */
export declare function correctBounds(layout: Layout, bounds: {
    cols: number;
}): Layout;
/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */
export declare function getLayoutItem(layout: Layout, id: string | number): LayoutItem | undefined;
/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */
export declare function getFirstCollision(layout: Layout, layoutItem: LayoutItem): LayoutItem | void;
export declare function getAllCollisions(layout: Layout, layoutItem: LayoutItem): Layout;
/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */
export declare function getStatics(layout: Layout): Layout;
/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * @param  {Array}      layout Full layout to modify.
 * @param  {LayoutItem} l      element to move.
 * @param  {Number}     [x]    X position in grid units.
 * @param  {Number}     [y]    Y position in grid units.
 * @param  {Boolean}    [isUserAction] If true, designates that the item we're moving is
 *                                     being dragged/resized by th euser.
 */
export declare function moveElement(layout: Layout, l: LayoutItem, x: number | void, y: number, isUserAction: boolean, preventCollision?: boolean): Layout;
/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 * @param  {Boolean} [isUserAction]  If true, designates that the item we're moving is being dragged/resized
 *                                   by the user.
 */
export declare function moveElementAwayFromCollision(layout: Layout, collidesWith: LayoutItem, itemToMove: LayoutItem, isUserAction: boolean): Layout;
export declare function setTransform(top: number, left: number, width: number, height: number): {
    transform: string;
    WebkitTransform: string;
    MozTransform: string;
    msTransform: string;
    OTransform: string;
    width: string;
    height: string;
    position: string;
};
/**
 * Just like the setTransform method, but instead it will return a negative value of right.
 *
 * @param top
 * @param right
 * @param width
 * @param height
 * @returns {{transform: string, WebkitTransform: string, MozTransform: string, msTransform: string, OTransform: string, width: string, height: string, position: string}}
 */
export declare function setTransformRtl(top: number, right: number, width: number, height: number): {
    transform: string;
    WebkitTransform: string;
    MozTransform: string;
    msTransform: string;
    OTransform: string;
    width: string;
    height: string;
    position: string;
};
export declare function setTopLeft(top: number, left: number, width: number, height: number): {
    top: string;
    left: string;
    width: string;
    height: string;
    position: string;
};
/**
 * Just like the setTopLeft method, but instead, it will return a right property instead of left.
 *
 * @param top
 * @param right
 * @param width
 * @param height
 * @returns {{top: string, right: string, width: string, height: string, position: string}}
 */
export declare function setTopRight(top: number, right: number, width: number, height: number): {
    top: string;
    right: string;
    width: string;
    height: string;
    position: string;
};
/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array} Layout, sorted static items first.
 */
export declare function sortLayoutItemsByRowCol(layout: Layout): Layout;
/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */
export declare function validateLayout(layout: Layout, contextName?: string): void;
declare const eventBus: import("mitt").Emitter<Record<import("mitt").EventType, unknown>>;
declare type eventBusType = typeof eventBus;
export declare const eventBusKey: InjectionKey<eventBusType>;
export declare const parentRootKey: InjectionKey<any>;
export declare const isDraggableKey: InjectionKey<Ref<boolean>>;
export declare const isResizableKey: InjectionKey<Ref<boolean>>;
export declare const rowHeightKey: InjectionKey<Ref<number>>;
export declare const maxRowsKey: InjectionKey<Ref<number>>;
export declare const colNumKey: InjectionKey<Ref<number>>;
export declare const containerWidthKey: InjectionKey<Ref<number>>;
export declare const marginKey: InjectionKey<Ref<number[]>>;
export declare const useCssTransformsKey: InjectionKey<Ref<boolean>>;
export declare const isMirroredKey: InjectionKey<Ref<boolean>>;
export {};

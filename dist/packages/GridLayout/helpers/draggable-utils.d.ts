export declare function offsetXYFromParentOf(evt: MouseEvent): {
    x: number;
    y: number;
};
export declare function getControlPosition(e: MouseEvent): {
    x: number;
    y: number;
};
export declare function createCoreData(lastX: number, lastY: number, x: number, y: number): {
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
    x: number;
    y: number;
};

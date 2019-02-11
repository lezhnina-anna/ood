import * as React from "react";

export interface IShape {
    getSquare(): number;

    getPerimeter(): number;

    draw(canvasRef: React.RefObject<HTMLCanvasElement>): void;
}
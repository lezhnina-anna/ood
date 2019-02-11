import {IShape} from "./IShape";
import * as React from "react";

export abstract class Shape implements IShape {
    abstract getSquare(): number;
    abstract getPerimeter(): number;
    abstract draw(canvasRef: React.RefObject<HTMLCanvasElement>): void;
}
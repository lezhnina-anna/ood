import {IPoint} from "../../IPoint";
import {Shape} from "../../Shape";
import * as React from "react";

export class Rectangle extends Shape {
    private readonly leftBottom: IPoint;
    private readonly rightTop: IPoint;
    private readonly width: number;
    private readonly height: number;

    constructor(p1: IPoint, p2: IPoint) {
        super();
        this.leftBottom = p1;
        this.rightTop = p2;
        this.width = Math.abs(p2.x - p1.x);
        this.height = Math.abs(p2.y - p1.y);
    }

    getSquare(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2;
    }

    draw(canvasRef: React.RefObject<HTMLCanvasElement>) {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.fillRect(this.leftBottom.x,this.leftBottom.y-this.height,this.width,this.height);
    }
}
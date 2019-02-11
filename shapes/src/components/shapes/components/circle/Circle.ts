import {IPoint} from "../../IPoint";
import {Shape} from "../../Shape";
import * as React from "react";

export class Circle extends Shape {
    private readonly center: IPoint;
    private readonly radius: number;

    constructor(c: IPoint, r: number) {
        super();
        this.center = c;
        this.radius = r;
    }

    getSquare(): number {
        return Math.pow(Math.PI * this.radius, 2)
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    draw(canvasRef: React.RefObject<HTMLCanvasElement>) {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.beginPath();
        context.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}
import {IPoint} from "../../IPoint";
import {Shape} from "../../Shape";
import * as React from "react";

export class Triangle extends Shape {
    private readonly v1: IPoint;
    private readonly v2: IPoint;
    private readonly v3: IPoint;
    private readonly a: number;
    private readonly b: number;
    private readonly c: number;

    constructor(v1: IPoint, v2: IPoint, v3: IPoint) {
        super();
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
        this.a = Triangle.getSide(v1, v2);
        this.b = Triangle.getSide(v2, v3);
        this.c = Triangle.getSide(v1, v3);
    }

    private static getSide(v1: IPoint, v2: IPoint) {
        return (Math.sqrt(Math.pow(v2.x - v1.x, 2)  + Math.pow(v2.y - v1.y, 2)))
    }

    getSquare(): number {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    draw(canvasRef: React.RefObject<HTMLCanvasElement>) {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.beginPath();
        context.moveTo(this.v1.x, this.v1.y);
        context.lineTo(this.v2.x, this.v2.y);
        context.lineTo(this.v3.x, this.v3.y);
        context.fill();
    }
}
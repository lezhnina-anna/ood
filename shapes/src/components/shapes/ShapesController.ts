import {IShape} from "./IShape";
import {Triangle} from "./components/triangle/Triangle";
import {IPoint} from "./IPoint";
import {Rectangle} from "./components/rectangle/Rectangle";
import {Circle} from "./components/circle/Circle";

export class ShapesController {
    processShape(item: string): IShape | undefined {
        const type = item.split(":")[0];
        const data = item.split(":")[1];
        switch (type.toUpperCase()) {
            case "TRIANGLE":
                return ShapesController.createTriangle(data);
            case "RECTANGLE":
                return ShapesController.createRectangle(data);
            case "CIRCLE":
                return ShapesController.createCircle(data);
            default:
                return undefined;
        }
    }

    private static createCircle(data: string): IShape {
        const coords = data.split(";");
        const center: IPoint = {
            x: +coords[0].split(",")[0],
            y: +coords[0].split(",")[1],
        };
        const radius = +coords[1];
        return new Circle(center, radius);
    }

    private static createRectangle(data: string): IShape {
        const coords = data.split(";");
        const p1: IPoint = {
            x: +coords[0].split(",")[0],
            y: +coords[0].split(",")[1],
        };
        const p2: IPoint = {
            x: +coords[1].split(",")[0],
            y: +coords[1].split(",")[1],
        };
        return new Rectangle(p1, p2);
    }

    private static createTriangle(data: string): IShape {
        const coords = data.split(";");
        const v1: IPoint = {
            x: +coords[0].split(",")[0],
            y: +coords[0].split(",")[1],
        };
        const v2: IPoint = {
            x: +coords[1].split(",")[0],
            y: +coords[1].split(",")[1],
        };
        const v3: IPoint = {
            x: +coords[2].split(",")[0],
            y: +coords[2].split(",")[1],
        };
        return new Triangle(v1, v2, v3);
    }
}
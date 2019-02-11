import * as React from "react";
import './App.scss';
import {autobind} from "core-decorators";
import {ShapesController} from "./components/shapes/ShapesController";

@autobind
class App extends React.Component {
    private readonly inputRef = React.createRef<HTMLTextAreaElement>();
    private readonly canvasRef = React.createRef<HTMLCanvasElement>();
    private readonly controller = new ShapesController();

    componentDidMount(): void {
        const canvas = this.canvasRef.current!;
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.fillStyle = " #ccdbe7";
    }

    render(): React.ReactNode {
        const exampleText = "circle: 250,250; 50\n" +
            "triangle: 0,0; 0,200; 200,0\n" +
            "rectangle: 300,400; 400,300";
        return (
            <div className="App">
                <div>
                    <textarea className={"input"} ref={this.inputRef} defaultValue={exampleText}/>
                    <div className={"buttons"}>
                        <div className={"button"} onClick={this.readData}>Draw</div>
                        <div className={"button"} onClick={this.clear}>Clear</div>
                    </div>
                </div>
                <canvas className={"canvas"}  width={500} height={500} ref={this.canvasRef}/>
            </div>
        );
    }

    readData(): void {
        const data = this.inputRef.current!.value.split("\n");
        data.forEach((item, index) => {
            const shape = this.controller.processShape(item);
            if (!shape) {
                return;
            }
            shape.draw(this.canvasRef);
            console.log("s:", shape.getSquare());
            console.log("p:", shape.getPerimeter())
        })
    }

    clear(): void {
        const canvas = this.canvasRef.current!;
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

export default App;

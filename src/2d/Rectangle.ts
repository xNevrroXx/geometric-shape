import { Polygon } from "./Polygon";

class Rectangle extends Polygon {
    constructor(width: number, height: number) {
        const vertices = [
            { x: 0, y: 0 },
            { x: width, y: 0 },
            { x: width, y: height },
            { x: 0, y: height },
        ];
        super({ vertices });
    }

    // Так как это прямоугольник - монм добавить методы получения ширины и длины
    public getWidth(): number {
        return this.sides[0];
    }
    public getHeight(): number {
        return this.sides[1];
    }

    // Перезапишем метод, чтобы не делать лишних вычислений
    public getArea(): number {
        return this.sides[0] * this.sides[1];
    }
}

export { Rectangle };

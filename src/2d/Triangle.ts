import { Polygon } from "./Polygon";

// равносторонний
class EquilateralTriangle extends Polygon {
    constructor(sideLength: number) {
        // h = a√3/2.
        const height = (sideLength * Math.sqrt(3)) / 2;
        const vertices = [
            { x: 0, y: 0 },
            { x: sideLength, y: 0 },
            { x: sideLength / 2, y: height },
        ];
        super({ vertices });
    }

    // Через сторону: S = (√3 * a²) / 4
    getArea(): number {
        return (Math.sqrt(3) * Math.pow(this.sides[0], 2)) / 4;
    }
}

export { EquilateralTriangle };

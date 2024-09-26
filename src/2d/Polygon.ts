import { IPoint2d, IPolygon2d } from "../models";
import { isValidVertices } from "../validation";
import { GeometricShape2d } from "./index";

class Polygon extends GeometricShape2d implements IPolygon2d {
    private readonly _vertices: IPoint2d[];
    private readonly _sides: number[];

    constructor(args: Pick<IPolygon2d, "vertices">) {
        super();
        this._vertices = this.setVertices(args.vertices);
        this._sides = this.calculateSides();
    }

    // расчёт длин сторон на основе координат вершин
    // Формула: l = √ (x 2 - x 1) 2+ (y 2 - y 1) 2)
    private calculateSides(): number[] {
        const sides: number[] = [];
        const numVertices = this.vertices.length;
        for (let i = 0; i < numVertices; i++) {
            const nextIndex = (i + 1) % numVertices; // % numVertices - замыкаем последнюю сторону к первой вершине
            const sideLength = Math.sqrt(
                Math.pow(this.vertices[nextIndex].x - this.vertices[i].x, 2) +
                    Math.pow(
                        this.vertices[nextIndex].y - this.vertices[i].y,
                        2,
                    ),
            );
            sides.push(sideLength);
        }

        return sides;
    }

    private setVertices(newVertices: IPoint2d[]) {
        const validationResult = isValidVertices(newVertices);
        if (!validationResult.isValid) {
            throw new Error(validationResult.message);
        }

        return newVertices;
    }

    public getPerimeter(): number {
        return this._sides.reduce((acc, side) => acc + side, 0);
    }

    public getNumberOfSides(): number {
        return this._sides.length;
    }

    public getNumberOfVertices(): number {
        return this._vertices.length;
    }

    // формула шнурка для рассчета площади полигона
    public getArea(): number {
        let sum1 = 0;
        let sum2 = 0;
        const numVertices = this.vertices.length;

        for (let i = 0; i < numVertices; i++) {
            const nextIndex = (i + 1) % numVertices;
            sum1 += this.vertices[i].x * this.vertices[nextIndex].y;
            sum2 += this.vertices[i].y * this.vertices[nextIndex].x;
        }

        return Math.abs((sum1 - sum2) / 2);
    }

    // getters & setters
    get sides(): number[] {
        return this._sides;
    }

    get vertices(): IPoint2d[] {
        return this._vertices;
    }
}

export { Polygon };

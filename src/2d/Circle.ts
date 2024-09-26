import { GeometricShape2d } from "./index";

class Circle extends GeometricShape2d {
    private readonly _radius: number;

    constructor(radius: number) {
        super();
        this._radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getDiameter(): number {
        return 2 * this.radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }

    // getters / setters
    get radius(): number {
        return this._radius;
    }
}

export { Circle };

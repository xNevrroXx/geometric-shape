# Best lib ever

## Install
```bash
npm install --save geometric-shape
```

## Import
```typescript
import {Rectangle, Circle, Polygon, EquilateralTriangle} from "geometric-shape";
```

## Usage
```typescript
// rectangle
const width = 10;
const height = 5;
const rectangle = new Rectangle(width, height);

console.log("sides: ", rectangle.sides);
console.log("area: ", rectangle.getArea());
console.log("perimeter: ", rectangle.getPerimeter());

// error handling
try {
    new Polygon({
        // point is not a geometric shape
        vertices: [{ x: 0, y: 0 }]
    });
} catch (error) {
    console.log(error);
}

// parallelepiped

const parallelepiped = new Polygon({
    vertices: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 15, y: 5 }, { x: 5, y: 5 }]
});
console.log("parallelepiped: ", parallelepiped);
console.log("list methods: ", Object.getOwnPropertyNames(Object.getPrototypeOf(parallelepiped)));
```

import { Polygon } from "./2d/Polygon";
import { Circle } from "./2d/Circle";
import { Rectangle } from "./2d/Rectangle";
import { EquilateralTriangle } from "./2d/Triangle";
import { GeometricShape2d } from "./2d";

// var GeometricShapes = (function() {
//     return ;
// })();

export {
    Polygon,
    Circle,
    Rectangle,
    EquilateralTriangle,
    GeometricShape2d as GeometricShape,
};

//
//
// const polygon = new GeometricShapes.Polygon({
//     vertices: [
//         { x: 0, y: 0 },
//         { x: 4, y: 0 },
//         { x: 4, y: 3 },
//         { x: 0, y: 3 }
//     ]
// });
//
// console.log(`Длины сторон полигона: ${polygon.sides}`);
// console.log(`Периметр полигона: ${polygon.getPerimeter()}`);
// console.log(`Площадь полигона: ${polygon.getArea()}`);

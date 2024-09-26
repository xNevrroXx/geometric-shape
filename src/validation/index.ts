import { IPoint2d, IPoint3d, TIsValid } from "../models";

export function isValidVertices(vertices: (IPoint2d | IPoint3d)[]): TIsValid {
    if (vertices.length < 2) {
        return {
            isValid: false,
            message: "The shape must have at least 2 points.",
        };
    }
    for (let i = 0, length = vertices.length - 1; i < length; i++) {
        // if it has identical points - return false.
        const point1 = vertices[i];
        for (let j = i + 1; j < vertices.length; j++) {
            const point2 = vertices[j];

            // if the point is 2d - we'll add z = 0.
            if (
                point1.x === point2.x &&
                point1.y === point2.y &&
                (("z" in point1 && point1.z) || 0) ===
                    (("z" in point2 && point2.z) || 0)
            ) {
                return {
                    isValid: false,
                    message:
                        "There are identical vertices, but there shouldn't be.",
                };
            }
        }
    }

    return { isValid: true };
}

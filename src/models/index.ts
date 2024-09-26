export interface IPolygon2d {
    vertices: IPoint2d[];
    sides: number[];
}

export interface IPoint2d {
    x: number;
    y: number;
}

export interface IPoint3d extends IPoint2d {
    z: number;
}

export type TIsValid =
    | {
          isValid: true;
      }
    | {
          isValid: false;
          message: string;
      };

// Your code here
class Polygon {
    constructor(shapeArr) {
        this.shapeArr = shapeArr;
    }
    get countSides() {
        return this.shapeArr.length;
    }
    get perimeter() {
        return this.shapeArr.reduce(function(prev, curr) {
            return prev + curr;
        });
    }
}

class Triangle extends Polygon {
    // constructor(shapeArr){
    //   super(shapeArr)
    // }
    get isValid() {
        let sides = this.shapeArr;
        return (
            sides[0] + sides[1] > sides[2] &&
            sides[0] + sides[2] > sides[1] &&
            sides[1] + sides[2] > sides[0]
        );
    }
}

class Square extends Polygon {
    get isValid() {
        let sides = this.shapeArr;
        return sides[0] ** 4 === sides.reduce((prev, curr) => prev * curr);
    }
    get area() {
        return this.shapeArr[0] ** 2;
    }
}
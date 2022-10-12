class Rectangle {

    constructor(_width, _height, _color = "Teal") {
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    get area() { // Syntax: shape.area
        return this.width * this.height;
    }

    static swapWidth(rectA, rectB) { //For the Class it self, syntax: Rectangle.swapWidth(shape0, shape1);
        let temp = rectA.width;
        rectA.width = rectB.width;
        rectB.width = temp;
    }

    greeting() {
        console.log(`Hello, my name is ${this.color}${this.width * this.height}.`);
    }

    talkshit() {
        console.log(`Eyy, gud to see ya, gtg bye`);
    }
}

const shape0 = new Rectangle(40, 6, "Green");
const shape1 = new Rectangle(4, 55)

shape0.greeting();
shape0.talkshit();
shape0.area;

Rectangle.swapWidth(shape0, shape1);
console.log(shape0);
console.log(shape1);

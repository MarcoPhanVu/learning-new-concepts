class Rectangle {

    constructor(width, height, color) {
        this.widht = width;
        this.height = height;
        this.color = color;
    }

    greeting() {
        console.log(this.width * this.height)
        console.log(`Hello, my name is ${this.color}${this.width * this.height}.`);
    }

    talkshit() {
        console.log(`Eyy, gud to see ya, gtg bye`);
    }
}


const shape0 = new Rectangle(4, 6, "Green");

shape0.greeting();
shape0.talkshit();

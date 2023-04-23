class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    toString() {
        return '(' + this._x + ', ' + this._y + ')';
    }
}

var p = new Point(1, 2);

//2.
const PI = 3.1415;
class Circle {
    constructor(x, y, r) {
        this._x = x;
        this._y = y;
        this._r = r;
    }
    area() {
        return PI * this._r * this._r;
    }
}
let c = new Circle(1, 1, 1);
console.log(c.area());

//3.
class Animal {
    constructor(food) {
        this.food = food;
    }
    eat() {
        return "eat " + this.food;
    }
    sleep() {
        return "zzzzz";
    }
}

class Dog  extends Animal{
    constructor(food, sound) {
        super(food);//继承Animal的food
        this.sound = sound;
    }
    bark() {
        return this.sound;
    }
}
class Cat  extends Animal{
    constructor(food, sound) {
        super(food);//继承Animal的food
        this.sound = sound;
    }
    bark() {
        return this.sound;
    }
}
class Human extends Animal{
    constructor(food, sound) {
        super(food);//继承Animal的food
        this.sound = sound;
    }
    speak(){
        return this.sound;
    }
}
var dog = new Dog('bone', '汪汪');
var cat = new Cat('fish', '喵喵');
var human = new Human('rice', '你好');
console.log("dog:")
console.log(dog.bark());
console.log(dog.eat());
console.log("cat:")
console.log(cat.bark());
console.log(cat.sleep());
console.log("human:")
console.log(human.speak());
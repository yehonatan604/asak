class animal {
    #id;
    #name;
    #color;
    #legs;
    static #count = 0;

    makeSound() {
        console.log('Demo Sound');
    }

    constructor(name, color, legs) {
        this.#name = name;
        this.#color = color;
        this.#legs = legs;
        animal.#count++;
        this.#id = animal.#count;
    }
}

class dog extends animal {
    makeSound() {
        console.log('Woof Woof!');
    }
    constructor(name, color) {
        super(name, color, 4);
    }
}

class bird extends animal {
    makeSound() {
        console.log('Tsif-tsif-tsif!');
    }
    constructor(name, color) {
        super(name, color, 2);
    }
}

const rexy = new dog('Rexy', 'black');
console.log(rexy);
rexy.makeSound();

const tweety = new bird('Tweety', 'yellow');
console.log(tweety);
tweety.makeSound();
const tweety2 = new bird('Tweety2', 'yellow');
console.log(tweety2);
tweety.makeSound();
const tweety3 = new bird('Tweety3', 'yellow');
console.log(tweety3);
tweety.makeSound();
const tweety4 = new bird('Tweety4', 'yellow');
console.log(tweety4);
tweety.makeSound();
const tweety5 = new bird('Tweety5', 'yellow');
console.log(tweety5);
tweety.makeSound();




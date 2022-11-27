class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(number) {
        this.health -= number;
    }
}

module.exports = Hero;
class Hero {
    constructor(health) {
        this.health = health;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}

module.exports = Hero;
const Dragon = require("./dragon")

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration()
    }

    calculateExpiration() {
        return new Date(5000 - Math.floor(Math.random() * 1000) + Date.now())
    }

    newDragon() {
        return new Dragon
    }
}

module.exports = Generation
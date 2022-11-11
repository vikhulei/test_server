const Generation = require("./generation")

class Engine {
    constructor() {
        this.generation = null
    }
    
    start() {
        console.log("starting the engine")
        this.buildGeneration()
    }

    buildGeneration() {
        this.generation = new Generation()
        console.log(this.generation)
        setTimeout(() => {
            this.buildGeneration()   
        }, this.generation.expiration.getTime() - Date.now())
    }
}

module.exports = Engine
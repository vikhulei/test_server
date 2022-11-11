const Generation = require("./generation")

class Engine {
    constructor() {
        this.generation = null
    }
    
    buildGeneration() {
        this.generation = new Generation()
        console.log(this.generation)
        setTimeout(() => {
            this.buildGeneration()   
        }, this.generation.expiration.getTime() - Date.now())
    }
}

const engine = new Engine()

engine.buildGeneration()
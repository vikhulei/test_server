const Generation = require("./generation")
const GenerationTable = require("./insertToTable")

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

        GenerationTable.insertGeneration(this.generation)

        console.log(this.generation)
        setTimeout(() => {
            this.buildGeneration()   
        }, this.generation.expiration.getTime() - Date.now())
    }
}

module.exports = Engine
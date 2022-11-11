const TRAITS = require("./traits")

const DEFAULT_PROPERTIES = {
    get birthdate() {
        return new Date()
    },
    nickname: "unknown",
    get traits() {
        const randomTraits = []
        TRAITS.forEach(TRAIT => {
            let randomType = TRAIT.type
            let randomValues = TRAIT.value
            let randomNumber = Math.floor(Math.random() * randomValues.length)
            let randomValue = randomValues[randomNumber]
            randomTraits.push({ randomType, randomValue })
        })
        return randomTraits
    }
}

class Dragon {
    constructor({ birthdate, nickname, traits } = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate,
            this.nickname = nickname || DEFAULT_PROPERTIES.nickname,
            this.traits = traits || DEFAULT_PROPERTIES.traits
    }
}

module.exports = Dragon
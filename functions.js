module.exports = {
    returnTwo: () => {
        let two = 2
        return two
    },

    greeting: (name) => {
        const nameGreet = (`Hello ${name}`)
        return nameGreet
    },

    add: (num1, num2) => {
        let sum = (num1 + num2)
        return sum
    },

    multiply: (num1, num2) => {
        let sum = (num1 * num2)
        return sum
    },

    subtract: (num1, num2) => {
        let sum = (num1 - num2)
        return sum
    },

    divide: (num1, num2) => {
        let sum = (num1 / num2)
        return sum
    },
}
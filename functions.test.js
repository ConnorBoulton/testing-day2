const {returnTwo, greeting, add, multiply, subtract, divide} = require('./functions')

test('Should return number two', ()=>{
    expect(returnTwo()).toEqual(2)
}) 

test('Should return name passed', ()=>{
    expect(greeting('Connor')).toEqual("Hello Connor")
})

test('Should add two numbers', ()=>{
    expect(add(4, 6)).toEqual(10)
})

test("Should multiply two numbers", ()=>{
    expect(multiply(5, 10)).toEqual(50)
})

test("Should subtract two numbers", ()=>{
    expect(subtract(30, 20)).toEqual(10)
})

test("Should divide two numbers", ()=>{
    expect(divide(100, 4)).toEqual(25)
})
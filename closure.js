// function closure() {
//     let counter = 0
//     function increment() {
//         return counter += 1
//     }

//     return increment
// }

// const myClosure = closure()

// console.log(myClosure())
// console.log(myClosure())
// console.log(myClosure())


function closure() {
    let counter = 0
    function increment() {
        return counter += 1
    }

    function decrement() {
        return counter -= 1
    }

    function getValue() {
        return counter
    }

    return {
        increment,
        decrement,
        value: getValue
    }
}

const myClosure = closure()

console.log(myClosure.increment())
console.log(myClosure.increment())
console.log(myClosure.increment())

console.log(myClosure.decrement())


console.log('my value', myClosure.value())





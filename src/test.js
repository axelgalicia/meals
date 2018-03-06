
function houseBuilder(floors) {
    return function color(color) {
        return `building a ${floors}-story, ${color} house`
    }
}

console.log(houseBuilder(5)('red'))

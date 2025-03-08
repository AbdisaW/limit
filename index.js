// for -in loop
const person= {
    name: 'John',
    age: 30
}

for(let key in person) console.log(key, person[key])

const colors = ['red', 'green', 'blue'];

for(let i in colors) console.log(i,colors[i]);

// for-of loop

for(let color of colors) console.log(color);
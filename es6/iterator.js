//1.
function makeIt() {
    var i = 0;
    var arr = [1, 2];
    var re = 3;
    return {
        next() {
            return arr.length != i ?
                { value: arr[i++], done: false } :
                { value: re, done: true }

        }
    }
}

let mIt = makeIt();
console.log(typeof (mIt));

console.log(mIt.next())
console.log(mIt.next())
console.log(mIt.next())


//2.
let obj1 = {
    [Symbol.iterator]: function () {
        return {
            next() {
                return {
                    value: "a",
                    done: false
                }
            }
        }
    }
}
for (let i of obj1) {
    console.log(i);
}


//3.
let obj2 = {
    [Symbol.iterator]: Array.prototype[Symbol.iterator],
    [0]: "a",
    [1]: "b",
    [2]: "c",
    length: 3
}

for (let j of obj2) {
    console.log(j)
}
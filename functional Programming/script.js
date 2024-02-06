let arr = [2, 5, 9];

const area = function (r) {
    return Math.PI * r * r;
}

const circumference = function (r) {
    return 2 * Math.PI * r;
}
const calculate = function (arr, logic) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(logic(arr[i]))
    }
    return result;
}
console.log(calculate(arr, area));
console.log(calculate(arr, circumference));

// using Map fun
console.log("Area " ,arr.map((r)=>Math.PI * r * r))

console.log(arr.map(area));
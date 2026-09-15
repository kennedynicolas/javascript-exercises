const sumAll = function(x, y) {

    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    }

    console.log(x, y)

    const min = Math.min(x, y);
    const max = Math.max(x, y);

    let num = 0
    for (let i = min; i <= max; i++) {
        num += i;
    }

    return num;
};

console.log(sumAll(123, -1))

// Do not edit below this line
module.exports = sumAll;

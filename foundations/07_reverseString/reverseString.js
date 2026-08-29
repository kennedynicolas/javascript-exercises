const reverseString = function(word) {
    let text = "";

    for (let i = word.length - 1; i >= 0; i--) {
        text += word.at(i)
    }
    return text
};

// let word = "hello";
// let tamanho = word.length;
// let resultado = "";

// for (let i = -1; i > -tamanho-1; i--) {
//         resultado += word.at(i);
//     }

// console.log(resultado);

// console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;

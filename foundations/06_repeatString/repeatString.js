

const repeatString = function(word, number) {

    let text = "";

    while (true) {

        if (Number(number) < 0) {
            return "ERROR";
        }

        else {

            for(let i = 0; i < Number(number); i++) {
                text += String(word)
            };
            return text;
            // return String(word).repeat(number);
        }

    }
    
};

// Do not edit below this line
module.exports = repeatString;

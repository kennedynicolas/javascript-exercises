

const removeFromArray = function(list, ...rmItem) {
    for(const item of rmItem) {

        while(list.includes(item)) {
            const position = list.indexOf(item)
            list.splice(position, 1)
        };
    };

    return list
};

// const removeFromArray = function(list, ...rmItem) {
//     let position = ""
//     for(const item of rmItem) {
//         while(position != -1) {
//             position = list.indexOf(item)
//             if(position != -1) {
//                 list.splice(position, 1)
//             };
//         };
//         position = undefined
//     };
//     return list
// }; 

// const brands = ["1", "2", "3"];
// console.log(brands.indexOf("4"));


// Do not edit below this line
// module.exports = removeFromArray;




// const removeFromArray = function(list, ...rmItem) {

//     for(let i = 0; i < list.length; i++) {

//         for(const item of rmItem) {
            
//             if(String(list[i]) === String(item)) {
//                 list.splice(i, 1);
//             }

//         };
//     };
//     return list
// };
// removeFromArray([1, 2, 3, 4], 1, 3, 2)


// // Do not edit below this line
module.exports = removeFromArray;

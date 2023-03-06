"use strict";
// цикл в цикле и метки

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);   
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`1 level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`2 level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`3 level: ${k}`);   
        }   
    }
}

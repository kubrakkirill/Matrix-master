// Monday: JS Basic
// for (let i=1;i<=135;i++){
//     console.log(i)
// }


// for (let i=0;i<=135;i+=2){
//     console.log(i)
// }


// let result = 0;
// for (let i=1;i<=135;i++){
//     result += i;
//     console.log(`Number is ${i}. Sum: ${result}`)
// }



// let X = [1,4,2,12];
// function maxElement (list){
//     let max;
//     let min = list[0];
//     for(let i = 0; i < list.length; i++){
//         if((list[i]) < min){
//             min = list[i];
//         } else {
//             max = list[i];
//         }
//     }
//     return max;
// }
//
// console.log(maxElement(X));


// let arr = [2, 4, 5, 1, 3]
// let result = 0;
// for (let i=0;i<arr.length;i++){
//     result += arr[i]
// }
// result = result/arr.length;
// console.log(result)


// let x = [2,-1,4,-3];
// let y = [];
// for (let i=0;i<x.length;i++){
//     if (x[i]<0){
//         x[i]=0;
//         y.push(x[i])
//     } else {
//         y.push(x[i])
//     }
// }
// console.log(y)


// let x = [1,-4,0,-1];
// let y = [];
// for (let i=0;i<x.length;i++){
//     if (x[i]<0){
//         x[i]='Turing';
//         y.push(x[i])
//     } else {
//         y.push(x[i])
//     }
// }
// console.log(y)


// Tuesday: JS Intermediate

// let x=[];
// for (let i=200;i<=2700;i++){
//     if (i % 3 === 0 && i % 5 ===0){
//         x.push(i)
//         x.pop()
//     } else if (i % 3 === 0 || i % 5 ===0){
//         x.push(i)
//     }
// }


// let x = [2,1,6,4,-7];
// let xReverse = x.reverse()
// console.log(xReverse)


// let arr = [];
// for (let i=0;i<=135;i++){
//     arr.push(i)
//     fizzBuzz(arr[i])
// }
// function fizzBuzz(item){
//     if (item % 5 === 0 && item % 3 === 0){
//         arr[item] = 'FizzBuzz'
//     } else if (item % 5 === 0){
//         arr[item] = 'Buzz'
//     } else if (item % 3 === 0){
//         arr[item] = 'Fizz'
//     }
// }
// console.log(arr)

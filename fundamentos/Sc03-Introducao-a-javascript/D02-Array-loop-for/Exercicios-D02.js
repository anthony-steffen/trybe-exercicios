// Exercitando aula ao vivo
// let lotteryNumbbers = [];
// let firstGame = [2, 12, 47, 26, 19, 50,];
// for(let index = 0; index < 6; index += 1){
//     lotteryNumbbers.push(Math.ceil(Math.random() * 60));
// }

// console.log(lotteryNumbbers);
// console.log(firstGame);


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maxNumber = 0;
let minNumber = numbers[0];

for(let index =0; index < numbers.length; index += 1){
sum += numbers[index]
};
let media = sum / numbers.length;

console.log(sum);
console.log(numbers.length);
console.log(media);
 
for(let index =0; index < numbers.length; index += 1){
    
}
if(media >= 20){
console.log('Valor maior que 20')
}else{
    console.log('Valor menor ou igual a 20');
}

for(let index =0; index < numbers.length; index += 1){
    if(numbers[index] > maxNumber){
    maxNumber = numbers[index];
    }
};

console.log(maxNumber);

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < minNumber){
    minNumber = numbers[index];
    }
};
console.log(minNumber);


// const max = Math.max(...numbers);
// const min = Math.min(...numbers);
// console.log(max);
// console.log(min);

// //----------------Saldações------------------//

// function saldacao(nome){
//     return 'Olá ' + nome + ' Bem vindo!'
// }
// saldacao('Anthony');
// console.log(saldacao('Anthony'));


// //----------------Adição de Saldo-----------------//

// const saldo = 1400;

// function adicionaSaldo(num) {
//     return num + saldo
// }
// adicionaSaldo(500);

// // //----------------Subtração de Saldo----------------//

// function subtraiSaldo(num){
//     return saldo - num
// }
// subtraiSaldo(1500);

// //-------------Multiplicação de Saldo---------------//

// function multiplcaSaldo(num){
//     return num * saldo
// }
// multiplcaSaldo(2);

// //----------------Divisão de Saldo-----------------//
// function divideSaldo(num){
//     return saldo / num
// }
// console.log(divideSaldo(2))
// console.log(adicionaSaldo(100))
// console.log(multiplcaSaldo(2))
// console.log(subtraiSaldo(1000))



//--------Aula ao Vivo --------//




// function orderNumbers(array) {
//     return array.sort();
// }
// console.log(orderNumbers([2, 78 ,12 ,300, 1, 5150]));



// ------Harcker Hank ------//
// function solveFirst(num1, num2){
// return num1 + num2
// }
// console.log(solveFirst(7,3))

// function simpleArraySum(ar) {
//     let sum =0;
    
//     for (let index = 0; index < ar.length; index+=1) {
//         sum+= ar[index];
//      }
//       return sum;
// };
// console.log(simpleArraySum([1, 30, 20, 14, 2]));





// function palindrome(str) {
//     const reverse = /[\W_]/g;
//     const lowRegStr = str.toLowerCase().replace(re, '');
//     const reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }


//   console.log(palindrome("A man, a plan, a canal. Panama"));

function palindrome(str) {
    const reversed = str.split('').reverse().join('')
    return str === reversed;
}
console.log(palindrome('Arara'))//

// // -------- Maior e Menor Número -------//
// function maiorMenor(array){
//     maior = array[0];
//     menor = array[0];
//     for (let index = 0; index < array.length; index += 1) {
//        if(array[index] > maior){
//             maior = array[index];
//        }else if(array[index] < menor){
//             menor = array[index];
//        }
//     }
// return `Maior Número: ${maior}
// Menor Número: ${menor}`
// }
// console.log(maiorMenor([75, 54, 100, 22, 45]));
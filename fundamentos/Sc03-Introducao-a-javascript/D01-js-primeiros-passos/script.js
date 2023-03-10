/*let num1 = 8
let num2 = 8
if (num1 > num2) {
   console.log('Vencedor Número 1 ');
} else if (num1 == num2) {
   console.log('Empate');
} else {
    console.log('Vencedor Número 2 ');
}*/

//------ Encontrando o tamanho adequado ------//

/*let diaper;
let babySize = 'Xablau';

if(typeof(babySize) !== 'number'){
    diaper = 'Favor Digitar apenas números';
}else if (babySize = 4){
    diaper = 'RN';
}else if(babySize > 4 && babySize <= 6){
    diaper = 'RN+';
}else if(babySize > 6 && babySize <= 8){
    diaper = 'P';
}else if(babySize > 8 && babySize <= 10){
    diaper = 'M';
}else if(babySize > 10 && babySize <= 13){
    diaper = 'G';
}else if(babySize > 13 && babySize <= 15){
    diaper = 'XG';
}else if(babySize > 15 && babySize <= 20){
    diaper = 'XXG';
}else{
    diaper = 'Está na hora de utilizar o vazo!';
}
console.log(diaper);
*/


//----------- Exercício Operadores -----------//
//Adição
/*const a = 50;
const b = 60;
console.log('Adição de a + b =',a + b);*/

//Subtração
/*const a = 50;
const b = 10;
console.log('Subtração de a - b =',a - b);*/

//Multiplicação
/*const a = 5;
const b = 6;
console.log('Multiplicação de a * b =',a * b);*/

//Divisão
/*const a = 50;
const b = 60;
console.log('Divisão de a / b =',a / b);*/

//Modulo
/*const a = 60;
const b = 9;
console.log('Modulo de a % b =',a % b)*/


//---------- Exercício if - else -------------//
//Maior de dois números.
/*const a = 10
const b = 10
if(a>b){
    console.log('Número',a,'é maior do que número',b);
}else if(a===b){
    console.log('Os dois números são iguais');
}else{
    console.log('Número',a,'é menor do que número',b);
}*/


//---------- Maior de três números -----------//
/*const a = 31
const b = 31
const c = 31

if(a > b && a > c){
    console.log('O Primeiro Número é o maior = ', a);
}else if(b > a && b > c){
    console.log('O Segundo Número é o maior =', b);
}else if(c > a && c > b){
    console.log('O Terceiro Número é o maior =', c);
}else if(a === b && a > c){
    console.log('O Primeiro e o Segundo números são iguais e maiores = ', a);
}else if(a === c && a > b){
    console.log('O Primeiro e o Terceiro números são iguais e maiores = ', a);
}else if(b === c && b > a){
    console.log('O Segundo e o Último números são iguais e maiores =', c);
}else{
    console.log("Os Números digitados são iguais!");
}*/


//-------------- True e False ----------------//
/*const parametro = undefined
    if(parametro === true){
console.log('positive');
    }else if(parametro === false){
        console.log('negative');
    }else{
        console.log('zero');
    }
*/


let anguloA = -30;
let anguloB = 90;
let anguloC = 60;
let sum = anguloA + anguloB + anguloC;

if(anguloA >0 && anguloB >0 && anguloC >0){
    if(sum ===180){
    console.log(true);
}else{
    console.log(false);
}
}else{
    console.log('erro');
}
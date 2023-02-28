//let num1 = 8
//let num2 = 8
//if (num1 > num2) {
//    console.log('Vencedor Número 1 ');
//} else if (num1 == num2) {
//    console.log('Empate');
//} else {
//    console.log('Vencedor Número 2 ');
//}



let diaper;
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

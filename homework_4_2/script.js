
const numbFromUser = prompt("Напишите трехзначное число:");

if (numbFromUser[0] === numbFromUser[1] && numbFromUser[1] === numbFromUser[2] && numbFromUser[0]=== numbFromUser[2]){
    console.log("Все числа одинаковые");
}else if(numbFromUser[0] === numbFromUser[1] || numbFromUser[1] === numbFromUser[2] ||numbFromUser[0]=== numbFromUser[2]){
    console.log("Есть одинаковые числа среди введеных!");
}else{
    console.log('Числа разные');
}





const userAge = prompt("Напишіть Ваш рік народження!");
switch (userAge){
    case null:
        alert("Шкода, що Ви не захотіли ввести свій рік народження");
        break;
    default:
        alert(`Ви народились  в ${userAge} році!`);
}


const userCity = prompt("Напишіть Вашу місто!");
switch(userCity){
    case "Київ":
        alert(`Ти живеш у столиці Украіни`);
        break;
    case "Вашингтон":
        alert(`Ти живеш у столиці США`);
        break;
    case "Лондон":
        alert(`Ти живеш у столиці ВеликобританіЇ`);
        break;
    case null:
        alert("Шкода, що Ви не захотіли ввести свое місто");
        break;
    default:
        alert(`ти живеш у місті ${userCity}`);
}
    




const userHobby = prompt("Напишить Ваш улюблений вид спорту!");

switch(userHobby){
    case "футбол":
        alert(`Круто! Хочеш стати Роналдо ?`);
        break;
    case "бокс":
        alert(`Круто! Хочеш стати Олександром Усиком ?`);
        break;
    case "плавання":
        alert(`Круто! Хочеш стати Майклом Фелпсом ?`);
        break;
    case null:
        alert("Шкода, що Ви не захотіли ввести свій спорт!");
        break;
    default:
        alert(`Ваш улюблений вид спорту ${userHobby}`);

}


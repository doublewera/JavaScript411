/* 
 Пишем страничку, на которой создаются вопросы типа 2+3 и 7-5 
 И поля ввода ответов. Внизу кнопка "проверить". Идёт время.
 По окончании таймера засчитывается то количество вопросов,
 на которые успел дать ответ. По нажатии кнопки указывается затраченное время и отмечаются правильные ответы
 */

 const questions = [];

 // Случайное число в заданном интервале
function randint(a, b) {   // b > a
    // 5 + 10 - 5
    return  Math.round(a + Math.random() * (b - a));
    //  Math.round - округлить
}

 // <label>2 + 3 = </label><input type="numer">
 // Создать с помощью Math.random() два целых числа
 // Запомнить эти два числа
 // Создать label, куда вписать эти два числа
 // Создать поле ввода, которое будет связано как-то с этими двумя числами

function create_question() {
    // Создать с помощью Math.random() два целых числа
    let a = randint(1, 20);  // первое слагаемое
    let b = randint(1, 20);  // второе слагаемое
    // Запомнить эти два числа
    questions.push([a, b]);
    // Создать label, куда вписать эти два числа
    const lbl = document.createElement('label');
    lbl.textContent = a + ' + ' + b + ' = ';
    // Прикрепила label к форме
    all_tests.appendChild(lbl);

    // Создать поле ввода, которое будет связано как-то с этими двумя числами
    const answer = document.createElement('input');
    answer.setAttribute('type', 'number');
    all_tests.appendChild(answer);
    answer.setAttribute('id', 'id' + (questions.length - 1))
}

function check() {
    console.log('Проверяем, подождите...');
    let myinput;
    let a;
    let b;
    for (let i = 0; i < questions.length; i++) {
        myinput = document.getElementById('id' + i);
        [a, b] = questions[i];
        if ((a + b) == myinput.valueAsNumber) {
            myinput.style.color="green";
        } else {
            myinput.style.color="red";
        }
    }
}


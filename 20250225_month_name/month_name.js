// Задача: Вывести на страницу HTML таблицу
// с 4-мы сезонами года.
// V Для каждого месяца указать русское название
// Фон покрасить средствами JS+CSS


function create_season_table() {
    // Вывести на страницу HTML таблицу
    // Элемент создается с названием в текстовом виде
    // надо созданный объект сохранить в переменную или константу
    const tbl = document.createElement('table');
    // Создать элемент
    // Прикрепить элемент к телу страницы
    document.body.appendChild(tbl);
    const seasons = ['winter', 'spring', 'summer', 'autumn'];

    let tr;
    let td;
    let ol;
    let li;
    for (let m = 2; m < 14; m++) {
        // Перебираем месяцы, начиная с марта, потом поделим с остатком остаток ))
        let month_number = (m + 1) % 12;  // 12, 13, 14 будут 0,1,2 - зима!
        if (month_number % 3 == 0) {
            // Если номер месяца делится нацело на три - начало сезона!
            // Если на 6 - начало строки
            if ((month_number + 3) % 6 == 0) {
                // Создали строку таблицы (tr) 
                tr = document.createElement('tr');
                // Ссылка на таблицу уже была, мы к таблице прикрепили строку
                tbl.appendChild(tr);
            }
            // Создали переменную и ячейку для сезона
            td = document.createElement('td');
            td.setAttribute('class', seasons[Math.round(month_number/3)]);
            tr.appendChild(td);
            // Создали список месяцев этого сезона
            ol = document.createElement('ol');
            ol.setAttribute("start", month_number);
            // Прикрепили элемент
            td.appendChild(ol);
        }
        // Создали элемент списка
        li = document.createElement('li');
        li.textContent = getWrittenMonth(month_number?month_number - 1:11);
        ol.appendChild(li);
    }
}

window.addEventListener(
    'load',  // Сделай так, браузер, чтобы после загрузки страницы
    create_season_table  // вызывалась эта функция 
);


function getWrittenMonth(month_number){
    const all_names = [  // Квадратные скобки - литерал списка
        'январь',   // 0
        'февраль',  // 1
        'март',     // 2
        'апрель',   // 3
        'мая',      // 4
        'июнь',     // 5
        'июль',     // 6
        'август',   // 
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь'
    ];
    // return all_names[4];  // Вернули май
    return all_names[month_number];
}
  
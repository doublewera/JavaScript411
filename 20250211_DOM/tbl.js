function main_func() {
    console.log('Страница готова к работе');
    add_table_to_page(create_table());
}

function add_table_to_page(tbl) {
    // Функция добавляет кем-то созданную таблицу в тело страницы
    document.body.appendChild(tbl);
    // прикрепляем элемент к телу страницы
}

function create_table(columns, rows) {
    // Создадим таблицу
    let result = document.createElement('table');  // наш будущий результат
    
    let tr;
    let td;
    for (let rowi = 0; rowi < 10; rowi ++) {
        // Создадим ряд (строку) таблицы TR - Table Row
        tr = document.createElement('tr');
        
        // прикрепим наш ряд (строку) к таблице
        result.appendChild(tr);
        
        for (let coli = 0; coli < 10; coli ++) {
            // Создадим ячейку таблицы
            td = document.createElement('td');
        
            // Прикрепляем ячейку к строке
            tr.appendChild(td);

            // текст в ячейке
            td.textContent = (rowi + 1) * (coli + 1);
        }
    }

    return result;  // вернули результат
}

window.addEventListener(
    'load',
    main_func  // вызываем главную функцию при загрузке
);
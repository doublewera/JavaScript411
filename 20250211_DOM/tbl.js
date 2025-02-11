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
    
    // Создадим ряд (строку) таблицы TR - Tabnle Row
    let tr = document.createElement('tr');

    // прикрепим наш ряд (строку) к таблице
    result.appendChild(tr);

    // Создадим ячейку таблицы
    let td = document.createElement('td');
    
    // Прикрепляем ячейку к строке
    tr.appendChild(td);
    // текст в ячейке
    td.textContent = 'mew';
    return result;  // вернули результат
}

window.addEventListener(
    'load',
    main_func  // вызываем главную функцию при загрузке
);
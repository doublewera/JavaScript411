window.addEventListener(
    'load',
    main_function
);

function najal(kuda) {
    console.log(kuda);
}

function main_function() {
    console.log('Страница готова');
    kvadrat.addEventListener(
        'click',
        (event) => {
            najal(kvadrat);
        }
    );
}
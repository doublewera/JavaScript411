window.addEventListener(
    'load',
    main_function
);

function najal(kuda) {
    console.log("Я работаю! нажал (куда)");
    console.log(kuda);
}

function pomeniai_tsvet(event) {
    najal(kvadrat);
    console.log('clientX = ', event.clientX);
    console.log('pageX = ', event.pageX);
    console.log('screenX = ', event.screenX);
    console.log('clientY = ', event.clientY);
    console.log('pageY = ', event.pageY);
    console.log('screenY = ', event.screenY);
}

function main_function() {
    console.log('Страница готова');
    kvadrat.addEventListener(
        'click',
        pomeniai_tsvet
    );
}
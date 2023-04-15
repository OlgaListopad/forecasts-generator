const button = document.querySelector('.forecast-btn'); // поиск кнопки в DOM кнопки
const heading = document.querySelector('h1'); // поиск в DOM элемента h1
const chance = document.querySelector('p'); // поиск в DOM элемента p
const container = document.querySelector('.forecasts'); // поиск обёртки для карточек с предсказаниями
const forecastItem = document.querySelector('#forecast-item'); //поиск шаблона

//Функция-хелпер
function generateRandomHelper(min, max) {
    const num = Math.random() * (max - min) + min;
    return +num.toFixed(0);
}


/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
button.addEventListener('click', function() {

    /* Функция добавления предсказаний в список через шаблоно forecast-item */
    function makeСardByTemplate(title, possibility) {

        const myCard = forecastItem.content.cloneNode(true); //клонируем теги в шаблоне
        myCard.querySelector('h3').textContent = title;
        myCard.querySelector('p').textContent = possibility;

        return myCard; //вернём готовую карточку
    }


    const forecastNumber = generateRandomHelper(1, 5); //генерируем номер предсказания от 1 до 5
    const value = generateRandomHelper(0, 100); //генерируем процент вероятности от 0 до 100
    let prediction = '';
    switch (forecastNumber) {
        case 1:
            prediction = "Скоро будет прибавка в зарплате";
            break;
        case 2:
            prediction = "Всё будет хорошо!";
            break;
        case 3:
            prediction = "Ты найдёшь вещь, которую теряла";
            break;
        case 4:
            prediction = "Тебя ждёт умопомрачительный день!";
            break;
        case 5:
            prediction = "Сегодня вечером тебя ожидает приятный сюрприз";
            break;
        default:
            prediction = "Предсказания закончились!";
            break;
    }

    chance.textContent = 'Вероятность: ' + value + '%';
    heading.textContent = prediction;
    const card = makeСardByTemplate(prediction, 'Вероятность: ' + value + '%');
    container.prepend(card); // добавить карточку в начало списка «Мои предсказания» — .forecasts

});
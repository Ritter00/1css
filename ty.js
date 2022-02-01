// создать элемент и заполнить его
const newDiv = document.createElement('h3');
newDiv.innerHTML = 'Hello!';
// найти элемент по id
const searchDiv = document.getElementById('content');
// вставить созданный элемент в DOM
document.body.insertBefore(newDiv, searchDiv);
// вставить/заменить содержимое, в ранее найденный элемент
searchDiv.innerHTML ='<h2>Bro</h2>';

const body = document.body;
body.style = 'margin: auto;'; // вставка стилей
searchDiv.style = 'margin-left: 6px; color: blue;'; // вставка стилей
searchDiv.setAttribute('title', 'asd'); // вставка аттрибутов
// поиск по имени класса(получаем массив)
const innDiv = document.getElementsByClassName('res')[0];


let gt = 'Привет, друг!';
// замена содержимого элемента
innDiv.innerHTML = `<p>${gt}</p>`;

// поиск по CSS-селектору
const cssSearchClass = document.querySelectorAll('.res'); // получаем массив
const cssSearchId = document.querySelector('#content');

// вставка дополнение к содержимому, без его изменения
cssSearchClass[0].insertAdjacentHTML('afterbegin', '<i>Lol</i>');


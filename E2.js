// Задание 1
let value = prompt('Ведите число');
value = +value;

if(!value){
  console.log('Упс, кажется вы ошиблись')
} else if (typeof(value) === 'number'){
  let text = (value % 2 === 0)? 'Число чётное': 'Число нечётное'
  console.log(text)
}

// Задание 2
let x;
x = {}

switch(typeof(x)){
  case 'number':
    console.log(x + ' - число');
    break;
  case 'string':
    console.log(x + ' - строка');
    break;
  case 'boolean':
    console.log(x + ' - булево значение');
    break;
  default:
    console.log("Тип " + x + ' не определен')
}

// Задание 3
let string = 'string'
console.log(string.split('').reverse().join(''))

// Задание 4
let randomNumb = Math.round(Math.random()*100);

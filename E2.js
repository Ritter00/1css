// Задание 1
let value = prompt('Ведите число');
value = +value;

if(!value){
  console.log('Упс, кажется вы ошиблись');
} else if (typeof(value) === 'number'){
  let text = (value % 2 === 0)? 'Число чётное': 'Число нечётное';
  console.log(text);
}

// Задание 2
let x;
x = {};

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
    console.log("Тип " + x + ' не определен');
}

// Задание 3
let string = 'string'
console.log(string.split('').reverse().join(''));

// Задание 4
let randomNumb = Math.round(Math.random()*100);

// Задание 5
let arr = ['utc', 'hj', 'co'];
console.log(arr.length);
arr.map(function(item, index, array){
  return console.log(item)
});

// Задание 6
let arrMas = ['y', 'y', 'y'];
let elem = true;
for (i = 1; i < arrMas.length; i++){
  if (arrMas[i-1] != arrMas[i]){
    elem = false;
  };
}
console.log(elem)

// Задание 7
let arrayN = [4, 1, 2, 6, 8, 9, 7, null, 5, NaN, '7', '+', 0 , 0, 'kl', 0, 8, 13];
let evenNumb = 0;
let oddNumb = 0;
let nullNumb = 0;

arrayN.forEach(function(item, index, array) {
  if(typeof(item) === 'number'){
    if (item === 0 ){
      nullNumb += 1
    } else if (+item){
      numb = item % 2;
      if (numb ===0){
        evenNumb += 1;
      } else {
        oddNumb += 1;
      }
    }
  }
});

               
console.log('Четных чисел: ' + evenNumb + ', Нечетных чисел: ' + oddNumb + 
            ', Количество нулей: ' + nullNumb)

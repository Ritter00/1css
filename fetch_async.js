// Пример 1
const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  // Делаем запрос за данными
  fetch('https://picsum.photos/v2/list/?limit=5')
    .then((response) => {
      // Объект ответа на запрос
      console.log('response', response);
      // Превращаем объект в JSON. Мы не можем его сразу прочитать,
      // надо отдать в следующий then
      const result = response.json();
      console.log('result', result);
      return result;
    })
    .then((data) => {
      // Объект результата в формате JSON
      console.log(data);
    })
    .catch(() => { console.log('error') });
});


 // Пример 2 Async/await и fetch
 
 const btn = document.querySelector('.j-btn');

// Функция, которая возвращаем fetch
const useRequest = () => {
  return fetch('https://picsum.photos/v2/list/?limit=5')
    .then((response) => {
      console.log('response', response);
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
  console.log('start');
  
  const requestResult = await useRequest();
  console.log('requestResult', requestResult);
  
  console.log('end');
});

// Пример 3 fetch и его настройка (POST)

const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  // Настраиваем наш запрос
  const options = {
    // Будем использовать метод POST
    method: 'POST',
    // Добавим тело запроса
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    // Дополнительный заголовое с описанием типа данных,
    // которые мы отправляем серверу. В данном случае
    // сервер jsonplaceholder будет знать, как ему
    // обрабатывать запрос
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
  // Делаем запрос за данными
  fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(response => response.json())
    .then(json => console.log(json))
});
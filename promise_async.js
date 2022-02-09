const numberPromise = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      let number = Math.floor(Math.random() * 100 + 1);
      if (number % 2) {
        reject(number);
      } else {
        resolve(number);
      }
    },
    3000
  )
}); 

numberPromise.then(
  result => {
    console.log(
        "Завершено успешно. Сгенерированное число — "
        + result
    );
  }
).catch(
  result => {
    console.log(
        "Завершено с ошибкой. Сгенерированное число — "
        + result
    );
  }
);

const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");

ctx1.beginPath(); // Создает новый контур
ctx1.moveTo(75,50); // Перемещает перо в точку с координатами x и y.
ctx1.lineTo(100,75); // Рисует линию с текущей позиции до позиции, определенной x и y.
ctx1.lineTo(100,25);
ctx1.fillStyle = "green"; // Заливаем выбранным цветом фигуру
ctx1.fill(); // Рисует фигуру с заливкой внутренней области.

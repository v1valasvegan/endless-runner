# Cakes runner

1 Герой
2 Препятствия
3 Награды
4 Жизни
5 Очки
6 Однообразный фон
7 Музыка
8 Старт/стоп экраны
9 Управление

ТЗ: 

Герой - поваренок
7 жизней
ножи
награда вишенки
очки сахар
ликер
кухня
shugar - shugar
dekstop стрелки право-лево

//canvas

canvas.getContext('2D')//
получение контекста

ctx.fillRect(x,y,width, height) // заполненный квадрат

ctx.crearRect(...)

requestAnimationFrame(callback)
// callback вызывает requestAnimationFrame

Шаги

1 пересечение с препядствиями
2 проверка событий
3 навести красоту

PATH
ctx.fillStyle;
ctx.strokeStyle;

ctx.beginPath();
ctx.arc(x, y, 0, 2* Math.Pi, 3) //круги

ctx.moveTo(x,y)
ctx.lineTo(x,y)

ctx.drawImage(
image,
dx,
dy,
width,
height
sx,
sy
)

ctx.fill();
ctx

// Утвердждение типов
// Простыми словами, это когда разработчик просит Ts пересмотреть свое отношение к определенному типу
// Сработает это или нет решает Ts
// Это можно сделать оператором as
var fetchData = function (url, method) {
    console.log(method);
};
// const requestOptions = {
// 	url: 'https://someurl.com',
// 	method: 'GET',
// };
var str = 'str'; // Здесь будет примитивный литерал, но с объектами так не работает
fetchData('qqq', 'GET'); // Без ошибок
// fetchData(requestOptions.url, requestOptions.method) // requestOptions.method - выдает ошибку
// Произошло это из-за того, что в объекте свойство метод определена как строка
// const method = 'GET' - в таком случае ошибки не будет
// fetchData(requestOptions.url, requestOptions.method as 'GET'); // Ошибки не будет
// Берем весь риск на себя
// Если мы поменяем свойство объекта, то ошибки тоже не будет
// const requestOptions = {
// 	url: 'https://someurl.com',
// 	method: 'GET' as 'GET', // Так тоже можно
// };
//
// fetchData(requestOptions.url, requestOptions.method);
// Есть еще один способ, создать объектный литерал
// const requestOptions = {
// 	url: 'https://someurl.com',
// 	method: 'GET', // Так тоже можно
// } as const;
//
// fetchData(requestOptions.url, requestOptions.method);
// Еще есть вариат с угловыми скобками, но в React так не получится
var requestOptions = {
    url: 'https://someurl.com',
    method: 'GET', // Так тоже можно
};
// fetchData(requestOptions.url, requestOptions.method as 'GET');
fetchData(requestOptions.url, requestOptions.method);
// const box = document.querySelector('.box');
// box.style // Тип будет Element | null, свойство style для box не будет существовать
// Поэтому выдаст ошибку. Это происходит из-за того, что Element это слишком общее представление
// Рассмотрим в другом модуле
// box?.classList // classList уже будет существовать
var box = document.querySelector('.box');
box.style; // Так уже ошибки не будет
// const input = document.querySelector('input') as HTMLElement;
//
// const someNumber: number = input.value; // Будет ошибка, потому что не существует на всех нтмл элементах атрибута value
var input = document.querySelector('input');
// Можно сделать так, но value будет строкой, и будет ругаться на number
var someNumber = +input.value; // Можно сделать так

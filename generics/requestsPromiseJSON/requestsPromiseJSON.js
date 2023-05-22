// Работа с промисами, запросами на сервер, JSON - с операциями на результат которых мы иногда не можем повлиять
var jsonTest = '{ "name": "Test", "data": 4 }';
// Мы никак не можем это нормально типизировать
var objFromJson = JSON.parse(jsonTest); // any
var toDoList = [];
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(response => response.json())
// 	.then(json => {
// 		// Такая типизация будет происходить средствами js
// 		if ('id' in json) {
// 			toDoList.push(json);
// 		}
//
// 		console.log(toDoList);
// 	})
// Получив массив уже ничего не сработает, нужно дописать еще одну проверку
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    // Такая типизация будет происходить средствами js
    if ('id' in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    else {
        console.log("".concat(json, " - is a string"));
    }
    console.log(toDoList);
});

// Работа с промисами, запросами на сервер, JSON - с операциями на результат которых мы иногда не можем повлиять

const jsonTest = '{ "name": "Test", "data": 4 }'

// Мы никак не можем это нормально типизировать
const objFromJson = JSON.parse(jsonTest); // any

let toDoList: ToDo[] = [];

interface ToDo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

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
	.then(response => response.json())
	.then(json => {
		// Такая типизация будет происходить средствами js
		if ('id' in json) {
			toDoList.push(json);
		} else if (Array.isArray(json)) {
			toDoList = json;
		} else {
			console.log(`${json} - is a string`);
		}

		// Вообще будет работать и без аннотации
		// В этом случае аннотация скажет, что мы предполагаем
		console.log(toDoList);
	})
	.catch()
	.finally();

const promise = new Promise<string>((resolve, reject) => {
	resolve('test');
})

promise.then(value => console.log(value.toLowerCase()))

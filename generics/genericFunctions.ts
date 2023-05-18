// Обобщение функций

function processingData<T, S>(data: T[], options: S): string {
	data.length; // Будет ошибка, но как только идентификатор T мы передадим как массив, ошибка исчезнет

	// Сужение
	switch (typeof data) {
		case 'string':
			return `${data}, speed: ${options}`;
		case 'number':
			return `${data}, speed: ${options}`;
		default:
			return 'Not valid';
	}
}

let res1 = processingData([1], 'fast');
let res2 = processingData(['1'], 'slow');

// Тут ошибки не будет, т.е. number относится к идентификатору, а передаваемый массив к аргументу функции
let res3 = processingData<number, string>([1], 'slow');

// Функцию можно использовать как аннотацию
function processing<T>(data: T): T {
	return data;
}

interface ProcessingFn {
	<T>(data: T): T
}

// let newFunc: <T>(data: T) => T = processing;

// Можно пойти дальше и сделать так, создаем функцию
// Т.к. функция это объект аннтируем его с помощью интерфейса
// И помещаем конкретное литеральное значение, которое подходит по аннтации
let newFunc: ProcessingFn = processing;

interface DataSaver {
	// processing: <T>(data: T) => T; // Если добавим сюда функцию аннотацию processing: processing уже будет ошибка
	// processing: typeof processing; // Так можно, получаем тип
	processing: ProcessingFn;
}

const saver: DataSaver = {
	// processing(data) {
	// 	console.log(data);
	// 	return data;
	// }
	// processing: <T>(data: T) => {
	// 	return data;
	// }
	// processing: (data) => { // Автоматом подставится <T>
	// 	return data;
	// }
	processing: processing
	// И так и так ошибки не будет
}

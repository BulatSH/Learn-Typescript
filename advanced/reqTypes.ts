// Запросы типов

const dataFormControl = {
	water: 200,
	el: 350,
}

// Таким образом мы может запросить типа объекта
// Так можно, если мы уверены, что больше нигде это не будет использоваться
function checkReadings(data: typeof dataFormControl): boolean {
	const dataFromUser = {
		water: 200,
		el: 350,
	};

	return data.el === dataFromUser.el && data.water === dataFromUser.water;
}

const PI = 3.14;
let PIClone: typeof PI; // Можно делать так

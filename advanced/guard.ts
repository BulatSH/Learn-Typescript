// Type Guard

function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (isNumber(msg)) {
		console.log(msg);
	} else {
		console.log(msg);
	}

	// typeof, instanceof, isArray и т.п. называются защитниками типа
	console.log(msg); // Тут получаем union тип, потому что мы вышли за рамки сужения
}

printMsg(4);

const box = document.querySelector('.box');
box?.addEventListener('click', () => {
});

// Вернем либо false, либо true, но в Ts есть такой синтаксис n is number, который говорит, что аргумент n будет number
// Такая запись чаще всего применятся в Type Guard
// Пользовательский Type Guard
// function isNumber(n: string[] | number | boolean): n is number {
// 	return typeof n === 'number';
// }

// Можно оптимизировать таким образом
function isNumber(n: unknown): n is number {
	return typeof n === 'number';
}

interface Car {
	engine: string;
	// wheels: number;
	wheels: {
		number: number;
		type: string;
	};
}

interface Ship {
	engine: string;
	sail: string;
}

function repairVehicle(vehicle: Car | Ship): void {
	if (isCar(vehicle)) {
		vehicle.wheels;
	} else if (isShip(vehicle)) {
		vehicle.sail;
	} else {
		vehicle; // Здесь мы получаем довольно интересную ситуацию, тип never, т.к. код сюда никогда не дойдет
	}
}

// function isCar(car: Car | Ship): car is Car { // Если мы здесь укажем boolean, то будет ошибка, т.к. не будет привязки к объекту
// 																							// Такой механизм называется Type Flow (Поток типов)
// 	return "wheels" in car; // Самый простой защитник типа для объекта
// }

function isCar(car: Car | Ship): car is Car {
	// В документации можем встретить и такой метод
	// return (car as Car).wheels !== undefined; // Не совсем очевидный спосою
	// Здесь говорится, что если мы утвердили этот аргумент как автомобилть,
	// то у него должен быть это свойство wheel, если это не так, то это не автомобиль
	// Этот способ считается мощнее, т.к, если свойство wheels является объектом,
	// то мы можем обращаться к его свойствам
	return (car as Car).wheels.number !== undefined;
} // Результатом всегда должен быть предикат, да/нет, true/false

function isShip(ship: Car | Ship): ship is Ship {
	return "sail" in ship;
}


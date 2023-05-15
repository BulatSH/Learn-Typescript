// never - это тип, значение которого никогда не будет возвращено, и он совместим только с другими never
// Простыми словами в тип never можно положить только тип never

interface Car {
	name: 'car';
	engine: string;
	wheels: number;
}

interface Ship {
	name: 'ship';
	engine: string;
	sail: string;
}

interface Airplane {
	name: 'airplane';
	engine: string;
	wings: string;
}

interface SuperAirplane {
	name: 'smth';
	engine: string;
	wings: string;
}

// type Vehicle = Car | Ship | Airplane | Element;
type Vehicle = Car | Ship | Airplane | SuperAirplane;

function isCar(car: Vehicle): car is Car {
	return "wheels" in car;
}

function isShip(ship: Vehicle): ship is Ship {
	return "sail" in ship;
}

function repairVehicle(vehicle: Vehicle): void {
	// if (isCar(vehicle)) {
	// 	vehicle.wheels;
	// } else if (isShip(vehicle)) {
	// 	vehicle.sail;
	// } else {
	// 	// const smth: never = vehicle; // Будет ошибка, т.к. мы в тип neve пытаемся поместить тип Airplane
	// 	// vehicle.wings; // Так будет нормально, но что если в наш тип приходит еще что-то
	// 	// vehicle.wings; // Как только выше мы добавили Element, мы получили ошибку
	// 	// т.к. сюда попадают оставшиеся 2 типа, это логично, дальше лучше использовать switch case
	// 	// Можно интерфейсам дать имена, чтобы спокойно в них ориентироваться
	// }

	// Весь switch case можно назвать Type Guard
	switch (vehicle.name) {
		case 'car':
			console.log(vehicle.wheels)
			break;
		case 'ship':
			console.log(vehicle.sail)
			break;
		case 'airplane':
			console.log(vehicle.wings)
			break;
		case 'smth':
			console.log(vehicle.wings)
			break;
		default:
			// console.log(vehicle); // Тут получаем never
			const smth: never = vehicle; // Теперь уже есть ошибка, т.к. предполагается, что в конце должен быть never
			// После добавления проверки ошибки уже не будет
			// Т.к. сюда попал SuperAirplane, так можно на этапе разработки увидеть что, что-то не так и добавить проверку не доходя до рантайма
			console.log('Oops!');
	}
	// Когда мы добавили интерфейс SuperAirplane в тип Vehicle никакой ошибки нет
	// Код будет работать неправильно, для этого и нужен тип never
}
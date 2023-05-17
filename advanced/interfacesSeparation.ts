// Разделение интерфейсов на правильные части

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

interface ComplexVehicle {
	name: 'car' | 'ship' | 'airplane';
	engine: string;
	wheels?: number;
	sail?: string;
	wings?: string;
}

type Vehicle = Car | Ship | Airplane;

function isCar(car: Vehicle): car is Car {
	return "wheels" in car;
}

function isShip(ship: Vehicle): ship is Ship {
	return "sail" in ship;
}

const car: ComplexVehicle = {
	name: 'car',
	engine: 'V8'
}

function repairVehicle(vehicle: ComplexVehicle): void {
	switch (vehicle.name) {
		case 'car':
			console.log(vehicle.wheels * 2) // Также при объединении мы можем обратиться к любым опциональным свойствам, это тоже минус
			// Так тоже выдаст ошибку, т.к. возможно wheels будет undefined
			break;
		case 'ship':
			console.log(vehicle.sail)
			break;
		case 'airplane':
			console.log(vehicle.wings)
			break;
		default:
			// const smth: never = vehicle; // уже выдаст ошибку, такая проверка не подходит, это минус
			console.log('Oops!');
	}
}

repairVehicle(car); // Получим NaN, т.к. в car мы отправили двигатель string\

// Создание одного большого интерфейса это не всегда хорошо и правильно
// В данном случае лучше сделать несколько маленьких, как у нас было раньше
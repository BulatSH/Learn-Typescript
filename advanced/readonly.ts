// Модификатор readonly

interface User {
	readonly login: string;
	password: string;
	age: number;
	addr?: string;
	parents?: {
		mother?: string;
		father?: string;
	};
}

const user: User = {
	login: 'first',
	password: 'qwerty',
	age: 50,
};

// Generic - такая струкрута всем свойствам внутри User задаст readonly
const userFreeze: Readonly<User> = {
	login: 'first',
	password: 'qwerty',
	age: 50,
}

// userFreeze.age = 4444; // Будет ошибка

// Будет ошибка - т.к. только для чтения
// user.login = 'test';
user.password = 'test'; // Это уже можно сделать

const dbName = '12345';

function setUserData(obj: User, db?: string): void {
	console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase()); // Ts автоматически подставил оператор опциональной цепочки
}

class Animal {
	readonly name: string = 'name';
}

const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5; // Мы можем перезаписать элемент массива, но чтобы избежать этого можно прописать оператор readonly
// basicPorts.push[566]; // Тоже не сработает
// Для кортежа тоже будет работать

// Generics классы

class User<T, S> {
	name: T;
	age: S;

	constructor(name: T, age: S) {
		this.name = name;
		this.age = age;
	}

	sayMyFullName<T>(surname: T): string {
		if (typeof surname !== 'string') {
			return `I gave only name: ${this.name}`
		}

		return `${this.name} ${surname}`
	}
}

class AdminUser<T> extends User<string, number> {
	rules: T;
}

const user1 = new User('John', 30);
console.log(user1);
console.log(user1.sayMyFullName('Smith'));

const user2 = new User<string, number>('Alex', 30);
console.log(user2);

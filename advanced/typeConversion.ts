// Приведение (преобразование) типов

// const num = Number(5); // Можно в переменную записать значение 5, но лучше так конечно не делать
// const num = 5;
// Мы можем получить ошибку при сравнении этих чисел
// Строгое сравнение дас false

// const num = Number(5); // тип у num будет Number (с большой буквы), это отдельный тип в Ts

// let num: Number = Number(5)
// let num2: number = 5;
// Можно еще создать переменную с помощью функции
// let num3 = Number(5); // Будет number

// num = num2; // Ошибки не будет, т.к. num неявно преобразовался в num2
// num2 = num; // Так будет ошибка, это недопустимо по правилам Ts

// Лучше не использовать конструкторы для создания переменных

// Стандартные преобразования спокойно можно использовать в Ts
const num = 5;
const strNum: string = num.toString();
const str = '5';
const numStr: number = +str;

interface Department {
	name: string;
	budget: number;
}

// Но с объектами все немного сложнее
const department: Department = {
	name: 'web-dev',
	budget: 50000,
};

interface Project {
	name: string;
	projectBudget: number;
}

// Тут будет 3 свойства, нам бы хотелось 2
// const mainProject: Project = {
// 	...department,
// 	projectBudget: 5000
// }

// Можно написать такую функцию
function transformDepartment(department: Department, amount: number): Project {
	return {
		name: department.name,
		projectBudget: amount,
	}
}

const mainProject: Project = transformDepartment(department, 5000);
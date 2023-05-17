// Использование void внутри Ts

type voidFunc = () => void;

const retString: voidFunc = () => {
	return 'string';
}

const s = retString(); // В переменной находится Void за счет четкой аннотации
console.log(s)
const retNum: voidFunc = () => {
	return 5;
}

const n = retNum(); // Тоже void
console.log(n)

// void это не только то, что у функции нет возвращаемого значения, но и то, что она будет полностью проигнорирована

const names = ['Anna', 'John'];
const newArr = names.slice(); // Новый массив копия

names.forEach((name, i, arr) => arr.push('Hey!')) // Ожидается void
// А вот push возвращает number - т.е. новую длину массива

// function f2(): void {
// 	return true; // Тут уже будет ошибка, т.к. мы сказали, что должен вернуться void, т.е. ничего, но сами возвращаем что-то
// }

// Такое возможно только с аннотацией

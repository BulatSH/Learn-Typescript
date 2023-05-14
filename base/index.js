// let userName: string = 'Ivan';
// Ошибка, т.к. userName строго строка
// userName = 5;
// Ошибка, т.к. у строки нет такого метода
// userName.isInteger();
// Примитивные типы в Ts
// '', "", `` - строка
// NaN, Infinity, 10, 0.5, -50, 4e10 - числа
// true, false - boolean
// const isBirthday = 1;
// const age = '40';
// const userName = 'John';
//
// if (isBirthday) {
// 	console.log(`Congrats ${userName}, age: ${age + 1}`); // Congrats John, age: 401
// }
// const isBirthday: boolean = true;
// // const age: number = 40;
// let age: number;
// const userName: string = 'John';
//
// // age = ''; // Ошибка
// age = 40;
//
// if (isBirthday) {
// 	console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`); // Congrats John, age: 401
// }
// const isBirthdayData: boolean = true;
// const ageData: number = 40;
// const userNameData: string = 'John';
// void это не только отсутствие возвращаемого значения, но и его полное игнорирование
// function logBrtMsg (isBirthday: boolean, userName: string, age: number): void
// function logBrtMsg (isBirthday: boolean, userName: string, age: number): string {
// 	if (isBirthday) {
// 		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}` // Congrats John, age: 401
// 	}
//
// 	return 'Error';
// }
// const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
// 	if (isBirthday) {
// 		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}` // Congrats John, age: 401
// 	}
//
// 	return 'Error';
// }
//
// logBrtMsg(isBirthdayData, userNameData, ageData);
// any - тип, с которй Ts понятия не имеет как работать
// const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
// const userObj = JSON.parse(userData); // any, Ts не знает, что получит
// console.log(userObj.smt()); // Ошибка. На данном этапе Ts не может сказать, что такого свойства нет
// const userObj: {
// 	isBirthdayData: boolean;
// 	ageData: 40;
// 	userNameData: 'John';
// } = JSON.parse(userData);
// console.log(userObj.smt()); // Ts скажет, что такого метода нет
// any лучше не использовать
// const isBirthdayData: boolean = true;
// const ageData: number = 40;
// const userNameData: string = 'John';
// never используем тогда, когда функция не имеет возвращаемого значения в принципе
// в этом и разница между never и void
// const createError = (msg: string): never => {
// 	throw new Error(msg);
// console.log(1); // до сюда код никогда не дойдет
// while (true) {} // тоже никогда ничего не вернет
// }
// const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
// 	if (isBirthday) {
// 		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}` // Congrats John, age: 401
// 	} else if (!isBirthday) {
// 		return 'Too bad';
// 	}
// Без функции never здесь будет ошибка, т.к. Ts говорит, что нужно дописать else
// при never ошибки не будет, если даже функция возвращает string
// return createError("Error");
// }
// logBrtMsg(isBirthdayData, userNameData, ageData);
// never переменной назначать нельзя, вернее в этом нет логикик
// const smth: never = undefined;
// null, undefined
// const test: null = null; // Можем поместить только null
// const test2: any = null; // null частный случай any // null является подтипом всех типов за исключением undefined
// const test3: string = null; // Ошибка, это можно отключить в конфиге, но лучше так не делать
// const test4: number = null; // Тоже ошибка
// const test5: undefined = undefined;
// const test6: any = undefined;
// const test7: string = undefined; // ошибка
// Если отключить в конфиге такая фукнция пройдет, но иногда вызовет ошибку
// function getRandomData () {
// 	if (Math.random() < 0.5) {
// 		return null;
// 	}
//
// 	return 'ff  ff f    ';
// }
// const data = getRandomData();
// const trimmedData = data ? data.trim() : null;
// let id: symbol = Symbol('id');
// const data = {
// 	[id]: 1,
// }
// console.log(data[id])
// const num1: bigint = 1n;
// const num2: bigint = 2n;
// console.log(num1 + 5) // Будет ошибка, т.к. нельзя складывать bigint с number
// console.log(num1 + num2)
// const isBirthdayData: boolean = true;
// const ageData: number = 40;
// const userNameData: string = 'John';
//
// const userData = {
// 	isBirthdayData: true,
// 	ageData: 40,
// 	userNameData: 'John',
// 	messages: {
// 		error: 'Error'
// 	}
// }
// Tuples (Кортежи)
// Необходим, чтобы хранить набор данных нужных типов в строго опледеленном порядке
// const userDataTuple = [true, 40, 'John'];
// userDataTuple[0] = 'true'; // Ошибок не будет
// const userDataTuple: [boolean, number, string] = [true, 40, 'John'];
// userDataTuple[0] = 'true'; // Уже будет ошибка
// У кортежей такие же методы, как у массивов, но есть нюансы. Например:
// userDataTuple.push(50);
// userDataTuple[3]; // Будет ошибка, т.к. кортеж не предполагает 4го элемента
// const res = userDataTuple.map((t) => `${t} - data`); // Внутри будет просто массив
// Деструктуризацию тоже можно использовать
// const [birthday, age, userName] = userDataTuple;
// С помощью спред оператора можно расширить кортеж
// const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Ann'];
// const createError = (msg: string): never => {
// 	throw new Error(msg);
// }
// const logBrtMsg = ({isBirthdayData, userNameData, ageData, messages: {error}}: {
// 	isBirthdayData: boolean;
// 	userNameData: string;
// 	ageData: number;
// 	messages: { error: string }
// }): string => {
// 	if (isBirthdayData) {
// 		return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
// 	} else {
// 		return createError(error);
// 	}
// }
//
// console.log(logBrtMsg(userData));
//
// const departments: string[] = ['dev', 'design', 'marketing'];
// const nums: number[][] = [[3, 5, 6], [3, 5, 6]];
// const department = departments[0];
//
// const report = departments
// 	.filter((d: string) => d !== 'dev')
// 	.map((d: string) => `${d} - done`)
//
// const [first] = report;
// console.log(first);
// Объединение - Union
// const message: string | number = 5; // Может быть один из двух типов
// const messages: string[] | number[] = ['a', 'b']; // Либо массив строк, либо массив чисел
// function printMsg(msg: string | number): void {
// 	console.log(msg);
// }
//
// printMsg(4);
// printMsg('Test');
// Narrowing - сужение
// function printMsg(msg: string | number): void {
// 	// console.log(msg.toLowerCase()); // Выдаст ошибку, т.к. Ts не знает string это будет или number
// 	if (typeof msg === 'string') {
// 		console.log(msg.toLowerCase());
// 	} else {
// 		console.log(msg.toExponential());
// 	}
// }
// function printMsg(msg: string[] | number | boolean): void {
// 	if (Array.isArray(msg)) {
// 		msg.forEach((m) => console.log(m));
// 	} else if (typeof msg === 'number') {
// 		console.log(msg.toFixed());
// 	} else {
// 		console.log(msg);
// 	}
// }
// printMsg(4);
// const printReadings = (a: number | string, b: number | boolean) => {
// 	if (a === b) {
// 		console.log(a, b); // number
// 	}
// }
// const printReadings2 = (a: number[] | string) => {
// 	console.log(a.slice(0, 3)); // Можно использовать без сужения, т.к. этот метод есть и для массивов, и для строк
// }
// function checkReadings(readings: { system: number } | { user: number }): void {
// 	// readings.system; // ошибка, т.к. такого свойства объекта может и не быть
// 	if ('system' in readings) {
// 		console.log(readings.system); // ошибки не будет
// 	} else {
// 		console.log(readings.user);
// 	}
// }
// function logValue(x: string | Date) {
// 	if (x instanceof Date) {
// 		console.log(x.getDate());
// 	} else {
// 		console.log(x.trim());
// 	}
// }
// Literal types - примитивные литеральные типы
// Литералы - это значения типов, 2 - это число, 'Hello' - строка
// let msg: 'Hello' = 'Hello'; // Литеральный тип
// msg = 'sd'; // Ошибка - можно поместить только Hello
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error('Invalid port');
    }
    return 'Server started';
}
startServer('https', 3000);
function createAnimation(id, animationName, timingFunction, duration, iterationCount) {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    if (timingFunction === void 0) { timingFunction = 'ease'; }
    // if (elem) {
    console.log("".concat(animationName, " ").concat(timingFunction, " ").concat(duration, " ").concat(iterationCount));
    // 	elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterationCount}`;
    // }
}
createAnimation('id', 'fade', 'ease-in', 5, 'infinite');

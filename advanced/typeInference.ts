// Механизм вывода типов

let a = 'string'; // Ts уже знает, что тип переменной string
// Тут все дело в компиляторе, Ts постоянно смотрит и следит за тем, чтобы не было ошибок
// Не нужно явно указывать типы, если за нас это может сделать вывод типов

let test;
test = 500; // В таком случае Ts уже не будет знать какая аннотация будет у переменной test, поэтому any

// Еще один пример, парсинг Json файла, Typescript не будет знать, что будет приходить, и укажет any
// И если мы обратимся к несуществующему свойству объекта, то получим ошибку уже в рантайме, т.к. Ts нам об этом не скажет
interface UserData {
	ageData: number;
	nameData: string;
}

const userData = '"ageData": 40, "nameData": "John"';

const userObj: UserData = JSON.parse(userData);

// console.log(userObj.smt); // Тут уже Ts скажет, что свойства smt не существует

let isOk = true;
let movement: boolean | string = false;

if (isOk) {
	movement = "moving";
}

let salary = 500; // В таком случае аннотация будет number
// const salary = 500; // В таком случае в аннотацию подставится литерал

// Обобщения интерфейсы, типы
// Понятие ограничения generics

interface ProcessingFn {
	<T>(data: T): T;
}

function processing<T>(data: T): T {
	return data;
}

let newFunc: ProcessingFn = processing;

type Smth<T> = T;

const num: Smth<number> = 5;

type User<T> = {
	login: T;
	age: number;
}

const user: User<string> = {
	login: 'str',
	age: 54,
}

// Generic helper types

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5];

// type NewUser<ParentsData> = {
// 	login: string;
// 	age: number;
// 	parents: ParentsData;
// }
//
// const newUser: NewUser<{ mother: string, father: string }> = {
// 	login: 'str',
// 	age: 54,
// 	parents: {mother: 'Anna', father: 'John'},
// }
//
// const newUser2: NewUser<string> = {
// 	login: 'str',
// 	age: 54,
// 	parents: '',
// }

// Generic constrains - ограничение в обобщениях.
// Мы бы хотели строго сказать, что NewUser можете в себя принимать только объект


// Можно сделать так, и вроде бы generic не нужен
// В таком случае мы не сможешь передать другое свойство, мы строго завиксировали
// Суть этого приема в расширяемости шаблона
interface ParentsOfUser {
	mother: string;
	father: string;
}

//
// type NewUser = {
// 	login: string;
// 	age: number;
// 	parents: ParentsOfUser;
// }

// Таким образом мы можем наследовать часть интерфейса
// И теперь у ParentsData обязательно должны быть два поля, а остальное на наше усмотрение
type NewUser<ParentsData extends ParentsOfUser> = {
	login: string;
	age: number;
	parents: ParentsData;
}

const newUser: NewUser<{ mother: string, father: string, married: boolean }> = {
	login: 'str',
	age: 54,
	parents: {mother: 'Anna', father: 'John', married: true},
}

// Ограниченить generic мы можем и наследуясь от примитивных типов
// const depositMoney = <T extends number | string>(amount: T): T => {
// 	console.log(`req to server with amount: ${amount}`);
// 	return amount;
// }
//
// depositMoney(500);
// depositMoney('500');
// depositMoney(true); // Ошибка

// Но оба этих варианта будут рабочими
const depositMoney = (amount: number | string): number | string => {
	console.log(`req to server with amount: ${amount}`);
	return amount;
}

depositMoney(500);
depositMoney('500');

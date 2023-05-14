// // Модификатор optional
// // Также Non-Null и Non-Undefined
//
// interface User {
// 	login: string;
// 	password: string;
// 	age: number;
// 	addr?: string; // Необязательное свойство
// 	parents?: {
// 		mother?: string;
// 		father?: string;
// 	};
// }
//
// // Ошибки нет
// const user: User = {
// 	login: 'first',
// 	password: 'qwerty',
// 	age: 50,
// };
//
// const dbName = '12345';
//
// // В аргументе функции тоже можно использовать этот модификатор
// // function setUserData(obj: User, db?: string): void {
// // 	console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase()); // Ts автоматически подставил оператор опциональной цепочки
// // }
//
// function setUserData(obj: User, db?: string): void {
// 	// Если знаем, что свойство будет всегда, уверены в этом,
// 	// То можно вручную отключить проверку с помощью оператора
// 	// Not-N|U, прописав восклицательный знак
// 	console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase()); // Ts автоматически подставил оператор опциональной цепочки
// }
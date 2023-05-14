// // Пересечение
// type Config = {
// 	protocol: 'http' | 'https';
// 	port: 3000 | 3001;
// }
//
// type Role = {
// 	role: string;
// }
//
// type ConfigWithRole = Config & Role; // Соединяет в одно
//
// const servConfig: ConfigWithRole = {
// 	protocol: 'http',
// 	port: 3000,
// 	role: 'admin', // Без указания роли будет ошибка
// }
//
// console.log(servConfig);
//
// type startSettings = (protocol: 'http' | 'https', port: 3000 | 3001) => string;
//
// const start: startSettings = (protocol: 'http' | 'https', port: 3000 | 3001): string => {
// 	return `${protocol} & ${port}`;
// }
//
// console.log(start('http', 3000));
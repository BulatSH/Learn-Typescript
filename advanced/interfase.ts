// type Config = {
// 	protocol: 'http' | 'https';
// 	port: 3000 | 3001;
// }

interface IConfig { // Венгерская нотация, чтобы назвать сущности перед ними добавляются определенные нотации
	// I - interface, T - type, C - класс и так далее, так более профессионально
	protocol: 'http' | 'https';
	port: 3000 | 3001;
	log: (msg: string) => void;
}

// Интерфейсы также можно объединять
interface IRole {
	role: string;
}

// Синатаксис такой, и вполне допустимо оставлять его пустым, если нам нужно только объединить интерфейсы
// Но можно и написать дополнительные свойства
interface ConfigWithRole extends IConfig, IRole {
	test: string;
}

// Отличий между тайпом и интерфейсом почти нет
// Первое - это синтаксис
const servConfig: ConfigWithRole = {
	protocol: 'http',
	port: 3000,
	role: 'admin',
	test: '',
	log: (msg: string): void => console.log(msg)
}

type startFunction = (
	protocol: 'http' | 'https',
	port: 3000 | 3001,
	// log: Function, // Если не знаем, что будет делать функция можно использовать встроенный тип фанкшн, но так лучше не делать
	log: (msg: string) => void
) => string

const startServer: startFunction = (
	protocol: 'http' | 'https',
	port: 3000 | 3001,
	log: (msg: string) => void
): 'Server started' => {
	log(`Server started on ${protocol}://server:${port}`);

	return 'Server started';
}

startServer(servConfig.protocol, servConfig.port, servConfig.log);

// Индексные свойства

// Если нам нужно задать шаблон для объекта, в котором мы не знаем какие данные будут, сколько их будет,
// но при этом мы четко знаем, что все будут каким-то определнным типом
interface Styles {
	[key: string]: string
}

const styles: Styles = {
	position: 'absolute',
	top: '20px',
	left: '50px',
}

// Встроенные Ts generics

// const arr: Array<number> = [1, 2, 3];
const arr: number[] = [1, 2, 3];

const roArr: ReadonlyArray<string> = ['test'];

interface IState {
	data: {
		name: string;
	};
	tag: string;
}

// function action(state: IState) {
// 	state.data = 'abs'; // При такой записи исходный объект будет изменен
// }

function action(state: Readonly<IState>) {
	// state.data = 'abs'; // Так уже ошибка отобразится
	// state.data.name = 'abs'; // Так уже ошибки не будет, все дело в том, что этот объект работает только на верхнем уровне объекта
}

// Partial - добавляет всем свойствам объекта ?, т.е. делает их не обязательными
const state: Partial<IState> = {
	data: {
		name: 'John', // Ошибок не будет
	},
}

// Required - делает все поля объекта обязательными

// Будет ошибка
// const strictState: Required<IState> = {
// 	data: {
// 		name: 'test',
// 	},
// }

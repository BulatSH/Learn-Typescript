// Практика

// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<Game, Hours> {
	game: Game;
	hours: Hours;
	server: string;
}

const player1: PlayerData<string, number> = {
	game: 'CS:GO',
	hours: 300,
	server: 'basic',
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: '300 h.',
	server: 'arcade',
};

const player3: PlayerData<string, object> = {
	game: 'Chess',
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: 'chess',
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FigureNames {
	RECT = 'rect',
	CIRCLE = 'circle',
	TRIANGLE = 'triangle',
	LINE = 'line',
}

interface Figure {
	name: FigureNames;
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

interface Data<T> {
	name: string;
	data: T | null;
}

function calculateAmountOfFigures<T extends Figure>(figure: T[]): AmountOfFigures {
	const amount: AmountOfFigures = {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0,
	}

	figure.forEach((item) => {
		switch (item.name) {
			case FigureNames.RECT:
				amount.squares++;
				break;
			case FigureNames.CIRCLE:
				amount.circles++;
				break;
			case FigureNames.TRIANGLE:
				amount.triangles++;
				break;
			default:
				amount.others++;
		}
	})

	return amount;
}

interface CustomFigure extends Figure {
	data?: {};
}

const data: CustomFigure[] = [
	{
		name: FigureNames.RECT,
		data: {a: 5, b: 10},
	},
	{
		name: FigureNames.RECT,
		data: {a: 6, b: 11},
	},
	{
		name: FigureNames.TRIANGLE,
		data: {a: 5, b: 10, c: 14},
	},
	{
		name: FigureNames.LINE,
		data: {l: 15},
	},
	{
		name: FigureNames.CIRCLE,
		data: {r: 10},
	},
	{
		name: FigureNames.CIRCLE,
		data: {r: 5},
	},
	{
		name: FigureNames.RECT,
		data: {a: 15, b: 7},
	},
	{
		name: FigureNames.TRIANGLE,
	},
];

console.log(calculateAmountOfFigures(data));
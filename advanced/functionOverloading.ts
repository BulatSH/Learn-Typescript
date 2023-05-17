// Перегрузка функций

interface Square {
	side: number;
	area: number;
}

interface Rect {
	a: number;
	b: number;
	area: number;
}

// Первые две строчки и есть перегрузка функции
// Это нужно, чтобы задокументировать и наглядно прописать все варианты использования
function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;

function calculateArea(a: number, b?: number): Square | Rect {
	if (b) {
		return {
			a, b,
			area: a * b,
		};
	} else {
		return {
			side: a,
			area: a * a
		};
	}
}

// Документация внутри кода
// Правила
// 1. Перегрузка функции всегда записывается до основного тела функции
// 2. Аргументы могут называться другими именами
// 3. Все перегрузки должны быть совсместимы с главной функцией
// function calculateArea(side: string): Square; // Так делать нельзя
calculateArea(1); // Square
calculateArea(1, 5); // Rect

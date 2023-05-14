// Enum структура существует только в Ts
// Это перечисление каких-то значений, которые мы можем использовать

// Любой член enum содержит какое-то значение
// Если мы ничего не задаем, то Ts сам автоматически подставляет значение по порядку от 0 до ...
enum Directions {
	TOP,
	RIGHT,
	LEFT,
	BOTTOM,
}

enum TimingFunc {
	EASE = 'ease',
	EASE_IN = 'ease-in',
	LINEAR = 'linear',
	// Гетерогенные enums - комбинация строковых и числовых значений
	// Но это встречается крайне редко, и лучше так не делать - это нелогично
	ERROR = 5,
}

// В enums можно внутри проводить вычисления для определения значения
// Но только с числовыми типами

// Дословно здесь мы говорим, что аргумент dir, может принимать в себя только 4 значения, которые мы записали в enum
function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
	if (dir === Directions.RIGHT) {
		console.log(tFunc)
	}
}

// Если мы попытаемся передать строку 'linear', то получим ошибку
// Т.к. мы должны строго следовать структуре
frame('id', Directions.RIGHT, TimingFunc.LINEAR);

// Когда мы записываем обычный enum при компиляции ts в js у нас формируется функция
// var Directions;
// (function (Directions) {
//     Directions[Directions["TOP"] = 0] = "TOP";
//     Directions[Directions["RIGHT"] = 1] = "RIGHT";
//     Directions[Directions["LEFT"] = 2] = "LEFT";
//     Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
// })(Directions || (Directions = {}));

// Когда мы enum объявляем как константу, то в скомпилированном js файле будут только значения членов enum
// Это увеличит скорость работы скрипта
// Но там есть проблемы, сама документация говорит, что лучше использовать классические перечисления, без const

// Enum структура существует только в Ts
// Это перечисление каких-то значений, которые мы можем использовать
// Любой член enum содержит какое-то значение
// Если мы ничего не задаем, то Ts сам автоматически подставляет значение по порядку от 0 до ...
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
    // Гетерогенные enums - комбинация строковых и числовых значений
    // Но это встречается крайне редко, и лучше так не делать - это нелогично
    TimingFunc[TimingFunc["ERROR"] = 5] = "ERROR";
})(TimingFunc || (TimingFunc = {}));
// В enums можно внутри проводить вычисления для определения значения
// Но только с числовыми типами
// Дословно здесь мы говорим, что аргумент dir, может принимать в себя только 4 значения, которые мы записали в enum
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
}
// Если мы попытаемся передать строку 'linear', то получим ошибку
// Т.к. мы должны строго следовать структуре
frame('id', Directions.RIGHT, TimingFunc.LINEAR);

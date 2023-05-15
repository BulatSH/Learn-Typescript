// Type Guard
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === 'number') {
        console.log(msg);
    }
    else {
        console.log(msg);
    }
    // typeof, instanceof, isArray и т.п. называются защитниками типа
    console.log(msg); // Тут получаем union тип, потому что мы вышли за рамки сужения
}
printMsg(4);
var box = document.querySelector('.box');
box === null || box === void 0 ? void 0 : box.addEventListener('click', function () {
});

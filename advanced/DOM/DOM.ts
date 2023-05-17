// Работа с DOM

const box = document.querySelector('.box') as HTMLElement;

// box?.textContent = "ddd"; // При изменении свойства этот оператор не поможет

const input = document.querySelector('input'); // Тут Ts сам понимает, что это и подставляет правильный тип
input?.value;

const link = document.querySelector('a');

if (link) {
	link.href = 'fff';
}

// Какую аннотацию подставлять интуитивно понятно
const p = document.querySelector('.paragraph') as HTMLParagraphElement;

// const links = document.querySelectorAll('a'); // Ts сам определил NodeListOf
// const links = document.querySelectorAll('a') as HTMLElement; // Так делать уже нельзя
// Тут нужно определить один элемент и с ним работать

const elem = document.createElement('a'); // Ts автоматически подставил HTMLAnchorElement

link.addEventListener('click', (e) => {
}) // mouseEvent

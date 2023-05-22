interface ISlider {
	container?: string;
	numberOfSlides?: number;
	speed?: 300 | 500 | 700;
	direction?: "horizontal" | "vertical";
	dots?: boolean;
	arrows?: boolean;
	animationName?: string;
}

function createSlider(
	{
		container = "",
		numberOfSlides = 1,
		speed = 300,
		direction = "horizontal",
		dots = true,
		arrows = true,
	}: ISlider = {}): void {
	console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

type NewSliderBase = Required<Omit<ISlider, 'animationName' | 'speed'>>;

interface NewSlider extends NewSliderBase {
	speed: number;
}

const customSliderOptions: NewSlider = {
	container: "id",
	numberOfSlides: 4,
	speed: 1100,
	direction: "horizontal",
	dots: true,
	arrows: true,
};

function createCustomSlider(options: NewSlider): void {
	if ("container" in options) {
		console.log(options);
	}
}

console.log(createCustomSlider(customSliderOptions));
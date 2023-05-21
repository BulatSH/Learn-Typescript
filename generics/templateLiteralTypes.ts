interface Currencies {
	usa: 'usd';
	china: 'cny';
	ukraine: 'uah';
	kz: 'tg';
}

type CreateCustomCurr<T> = {
	// [P in keyof T as MyAnimation]: string;
	[P in keyof T as `custom${Capitalize<string & P>}`]: string;
}

// {fade: string, swipe: string}
// type CustomCurrencies = CreateCustomCurr<Currencies>;

// {customUsa: string, customChina: string, customUkraine: string, customKz: string}
type CustomCurrencies = CreateCustomCurr<Currencies>;

type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';

// Шаблон литерального типа
// type MyNewAnimation = `${MyAnimation}In`; // fadeIn | swipeIn

// type MyNewAnimation = `${MyAnimation}${Direction}`; // 'fadein' | 'fadeout' | 'swipein' | 'swipeout'

// Для работы с шаблонами строк в Ts были добавлены 4 встроенных generic
// Uppercase, Lowercase, Capitalize, InCapitalize
// 'fadeIn' | 'fadeOut' | 'swipeIn' | 'swipeOut'
type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
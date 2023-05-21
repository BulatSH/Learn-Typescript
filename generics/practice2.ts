interface IPhone {
	company: string;
	number: number;
}

interface IMobilePhone extends IPhone {
	size: string;
	companyPartner: IPhone['company'];
	manufactured: Date;
}

const phones: IMobilePhone[] = [
	{
		company: "Nokia",
		number: 1285637,
		size: "5.5",
		companyPartner: "MobileNokia",
		manufactured: new Date("2022-09-01"),
	},
	{
		company: "Samsung",
		number: 4356637,
		size: "5.0",
		companyPartner: "SamMobile",
		manufactured: new Date("2021-11-05"),
	},
	{
		company: "Apple",
		number: 4552833,
		size: "5.7",
		companyPartner: "no data",
		manufactured: new Date("2022-05-24T12:00:00"),
	},
];

interface IPhonesManufacturedAfterDate extends IMobilePhone {
	initialDate: string;
}

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе

function filterPhonesByDate(
	phones: IMobilePhone[],
	key: keyof IMobilePhone,
	initial: string
): IPhonesManufacturedAfterDate[] {
	return phones
		.filter((phone) => {
			const manufactured = phone[key];

			if (manufactured instanceof Date
				&& manufactured.getTime() > new Date(initial).getTime()) {
				return phone;
			}
		})
		.map((phone) => ({...phone, initialDate: initial}));
}

// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));

// С помощью generics
function filterPhonesByDateAlt<T>(
	phones: T[],
	key: keyof T,
	initial: string
): Partial<IPhonesManufacturedAfterDate>[] {
	return phones
		.filter((phone) => {
			const manufactured = phone[key];

			if (manufactured instanceof Date
				&& manufactured.getTime() > new Date(initial).getTime()) {
				return phone;
			}
		})
		.map((phone) => ({...phone, initialDate: initial}));
}

console.log(filterPhonesByDateAlt(phones, "manufactured", "2022-01-01"));
// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

interface FitnessClub {
	clubName: string;
	location: string;
	classes: FitnessClass[];
	futureClasses: FitnessFutureClass[];
	currClients: CurrClient[];
	exClients: ExClient[];
	futureClients: FutureClient[];
}

interface FitnessClass {
	name: string;
	startsAt: string;
	duration: number;
}

interface FitnessFutureClass extends Omit<FitnessClass, 'startsAt'> {
	willStartsAt: string;
}

interface Client {
	name: string;
	age: string | number;
	gender: "male" | "female";
	timeLeft: string;
	makeCallFor: Date;
}

type CurrClient = Omit<Client, "makeCallFor">;
type ExClient = Omit<Client, "timeLeft">;
type FutureClient = Pick<Client, "name" | "makeCallFor">;

const fitnessClubCenter: FitnessClub = {
	clubName: "Fitness club Center",
	location: "central ave. 45, 5th floor",
	classes: [
		{
			name: "yoga",
			startsAt: "8:00 AM",
			duration: 60,
		},
		{
			name: "trx",
			startsAt: "11:00 AM",
			duration: 45,
		},
		{
			name: "swimming",
			startsAt: "3:00 PM",
			duration: 70,
		},
	],
	futureClasses: [
		{
			name: "boxing",
			willStartsAt: "6:00 PM",
			duration: 40,
		},
		{
			name: "breath training",
			willStartsAt: "8:00 PM",
			duration: 30,
		},
	],
	currClients: [
		{
			name: "John Smith",
			age: "-",
			gender: "male",
			timeLeft: "1 month",
		},
		{
			name: "Alise Smith",
			age: 35,
			gender: "female",
			timeLeft: "3 month",
		},
		{
			name: "Ann Sonne",
			age: 24,
			gender: "female",
			timeLeft: "5 month",
		},
	],
	exClients: [
		{
			name: "Tom Smooth",
			age: 50,
			gender: "male",
			makeCallFor: new Date("2023-08-12"),
		},
	],
	futureClients: [
		{
			name: "Maria",
			makeCallFor: new Date("2023-07-10"),
		},
	],
};

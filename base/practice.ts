// 1
const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
	return JSON.parse(response);
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
	if (available) {
		let res: number = fetchCurr(currRate) * amount * commission;
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.05);

// 2
const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
	{readings, mode}: {
		readings: number;
		mode: string;
	},
	wData: {
		readings: number;
	},
	elRate: number,
	wRate: number
): void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
	[electricity, water]: number[],
	electricityUserData: {
		readings: number;
		units: string;
	},
	waterUserData: {
		readings: number;
		units: string;
	}): string => {
	return `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${electricity}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData))

// Завдання 1: Температура за Цельсієм та Фаренгейтом  🔽
let celsius = 25; 
let fahrenheit = celsius * 9/5 + 32; 
console.log("Температура у Фаренгейтах: " + fahrenheit);

// Завдання 2: Кількість днів, годин та хвилин у місяці 🔽
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Годин у місяці: " + hoursInMonth);
console.log("Хвилин у місяці: " + minutesInMonth);

// Завдання 3: Рівень здоров'я та енергії гравця 🔽
let health = 100;
let energy = 80;
health -= 20; 
energy -= 15;
console.log("Здоров'я: " + health);
console.log("Енергія: " + energy);

// Завдання 4: Сума покупки зі знижкою 🔽
let purchaseAmount = 200; 
let discount = purchaseAmount * 0.10;
let finalAmount = purchaseAmount - discount;
console.log("Сума після знижки: " + finalAmount);

// Завдання 5: Округлення числа 🔽
let floatNumber = 45.78;
let roundedNumber = Math.floor(floatNumber);
console.log("Округлене число: " + roundedNumber);

// Завдання 6: Перетворення рядка у десяткове число 🔽
let floatString = "56.78";
let convertedFloat = parseFloat(floatString);
console.log("Перетворене десяткове число: " + convertedFloat);

// Завдання 7: Перетворення рядка у ціле число 🔽
let intString = "42";
let convertedInt = parseInt(intString);
console.log("Перетворене ціле число: " + convertedInt);

// Завдання 8: Квадратний корінь числа 🔽
let number = 81;
let squareRoot = Math.sqrt(number);
console.log("Квадратний корінь: " + squareRoot);

// Завдання 9: Перетворення числа в рядок і навпаки 🔽
let integer = 15;
let stringWithNumber = "50";
let parsedInt = parseInt(stringWithNumber);
let integerToString = integer.toString();
console.log("Перетворене на ціле число: " + parsedInt);
console.log("Перетворене на рядок: " + integerToString);

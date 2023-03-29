//https://www.youtube.com/watch?v=maPRR_jjyOE&list=WL&index=11&t=8s урок - 6 часов
// console.log(5555)
//Вывод в консоль
// console.log('Hello, from js!')


// ===== 2. Переменные =====
// let userName = 'Марк';
//console.log(userName);В console мы увидим Марк


// ===== 2.1 Типы переменные =====
// Новый стандарт ES6: 
// let - переменная
// const - константа

// Старый стандарт ES5:
// var - переменная

// let - может менять значение во время работы программы
/*// 1 вариант
let userName = 'Марк';
console.log(userName);

userName = 'Егор';
console.log(userName);*/

// const не может менять значение
// const yearOfBirth = 1990;
//yearOfBirth = 2000; Покажет ошибку!!


// var - старый формат объявления переменной
// в отличие от let и const имеет функциональную область видимости, а не блочную 
// не рекомендуется к использованию
// Может менять значение на протяжении работы программы
/*// 2 вариант
var city = 'Moscow';
city = 'Minsk';
city = 'Kuba';
console.log(city);*/
// 20:15


// Функции
/*function sum() {
  var name = "Yurij"
  console.log(name);
}
sum();*/

// console.log(name);

// Профессиональный код
/*{
  let userName = "Bob"
  console.log(userName);

  // Глобальный
  var someNumber = 10;
  console.log(someNumber);
}*/

// console.log(userName);
// console.log(someNumber);

// ! По умолчанию используем const, когда явно понятно что переменная будет менять своё значение, тогда let



// ===== 2.2 Типы данных =====
/*let userName = 'Марк'; // Строка (Текста) (Одного слово, фраза, предложение, абзац, хоть целая книга)

let number = 30; // Число. Число с кавычкой это строка.

let isMarried = true; // Логическое значение true/false*/


// Динамическая типилизация
/*let someVariable = 'Some value'; // сейчас someVariable типа String(Строка)
someVariable = 50; // сейчас someVariable типа number(число)
someVariable = true; // someVariable становиться типа Booleam(Логический)*/

/*//Плохой пример нейминга
let u = 'Bob';
console.log(u);

//Хороший пример нейминга
let userName = 'James';
console.log(userName);*/


//Значение null
// "ничего", "пусто" или "значение неизвестно".
// let age = null;
/*let age = 32;
age = null;*/


//Значение undefined
//Означает что "значение не было присвоено"
//Если переменная объявлена, но ей не присвоено никакого значения,
//то её значением будет undefined
/*// 1 вариант
let userName; // undefined
console.log(userName);*/

/*// 2 вариант
let someName = 'James';
someName = undefined; // !Так не делают
someName = null; // Делают так*/


// Объекты
// Массивы


//Оператор typeof
/*const someName = 'Bob'; // В браузере увидим string
console.log(typeof someName);*/
/*const someName = 44; // В браузере увидим number
console.log(typeof someName);*/
/*const someName = true; // В браузере увидим boolean
console.log(typeof someName);*/


// BigInt
/*console.log(Number.MAX_SAFE_INTEGER); //В браузере увидим числы
console.log(9007199254740991 + 1); //В браузере увидим числы больше на 1
console.log(9007199254740991 + 9007199254740991); //В браузере увидим числы больше на 9007199254740991*/


// Sumbol
// Символ - это уникальное примитивное значение. 
// Позволяет добавлять уникальное свойство к объекту, с увенреностью что он не перезапишет никакое другое свойство. Также


// ===== 3. Операторы сравнения и условия=====
/*Операторы сравнения
> - больше, < - меньше, >= - больше либо равно, <= - меньше либо равно
== - нестрогое сравнение
=== - строгое сравнение
!= - нестрогое неравенство
!== строгое неравенство
*/
/*console.log(10 > 5); // В браузере показал true
console.log(20 > 80); // В браузере показал false*/

/*let result = 10 > 5;
console.log(result); // В браузере показал true*/

/*let result = 10 == 5;
console.log(result); // В браузере показал false*/

/*console.log('5' == 5); // true*/
/*console.log('5' === 5); // false*/

/*let number = 5;
console.log(number = 10); // В браузере показал 10*/

/*let number = 5;
if (number = 10) {
  console.log(1111);// В браузере показал 1111
  console.log(number); // В браузере показал 10
};*/
// 44:21

/*// 1 вариант
if (Условие) {
  // Код который будет выполнен если условие верно
} else {
  // Код который будет выполнен если условие не верно
}
*/

/*// 2 вариант
const time = 10;
if (time < 12) {
  console.log('Доброе утро!');
} else {
  console.log('Добрый день!');
} */

/*// 3 вариант
const time = 18;
if (time < 12) {
  console.log('Доброе утро!');
} else if (time >= 12 && time < 18) {
  console.log('Добрый день!');
} else {
  console.log('Закрой окно!');
}*/


// ===== 4. Тернарный оператор =====
/*if (10 < 12) {
  console.log('Условик верно');
} else {
    console.log('Условик НЕ верно');
}*/

/*//Как выглядить в тернарном операторе
//(условие) ? (условие верно) : (условие НЕ верно);
(10 < 12) ? console.log('Условик верно') : console.log('Условик НЕ верно');*/

/*// 2 вариант
let greeting;
if (22 == 12) {
  greeting = 'Доброе утро!';
} else {
  greeting = 'Добрый день!';
}
console.log(greeting);*/

/*// 3 вариант
let greeting;
let time = 10;
if (time < 12) {
  greeting = 'Доброе утро!';
} else {
  greeting = 'Добрый день!';
}
console.log(greeting);

//Как выглядить в тернарном операторе
greeting = time < 12 ? 'Доброе утро!' : 'Добрый день!';*/

/*// 4 вариант
let time = 150;
let greeting = time < 12 ? 'Доброе утро!' : 'Добрый день!';
console.log(greeting);*/


// ===== 5. Конкатенация строк и шаблонные строки =====
// console.log('Привет, Марк! Как твои дела?');

/*//JS-kодом предложении ставим в одну строку
let greeting = 'Привет, Марк!';
let howAreYou = ' Как твои дела?';
let howAreY = ' -Нормально';
let sayHi = greeting + howAreYou + howAreY;
console.log(sayHi);*/

/*//конкатенация 'строка' + 'строка'
const userName = 'Марк';
console.log('Привет, ' + userName + '! Как твои дела?');*/

/*//шаблонные строки
//Iаблонные строки и интерполяция
const userName = 'Ben';
console.log(`Привет, ${userName}! Как твои дела?`);*/
// 1:00:34


// ===== 6. Функции =====
// console.log('Привет, дорогой пользователь!');

// DRY - don't repeat yourself - «не повторяй код»
/*function sayHi() {
  console.log('Привет, уважаемый пользователь!');
}
sayHi();
sayHi();
sayHi();

// function declaration
function sayHi() {
  alert('Привет');
}

// function expression
var sayHi = function () {// Через var работает, const и let не видить.
  alert('Привет');
}*/

// Можно функцию писать так.
/*sayHi();
// function declaration
function sayHi() {
  alert('Привет');
}
// Или так
sayHi();
// function declaration
function sayHi() {
  console.log('Привет');
}*/

// С function expression нельзя сначала выводить, а потом описывать функцию! Будет в консоле ОШИБКА!


// ===== 6.1 Параметры и аргументы для функции =====
// const userName = 'Марк';
// console.log('Привет, ${userName}! Как твои дела?');
// тоже самое но через параметер name
/*function sayHi(name) {
  console.log(`Привет, ${name}! Как твои дела?`);
}
sayHi('Bogdan');
sayHi('Damir');
sayHi('Radmir');*/


// ===== return =====
/*function summ(a, b) {
  const result = a + b;
  console.log(result);
}
summ(10, 15);//a=10; b-15; В браузере сложились цифры, стало 25*/

// Создаём функцию undefined. Он со сложеной суммой выйдет в браузере(в консоле). 
/*function summ(a, b) {
  const result = a + b;
  console.log(result);
}
let res = summ(10, 15);
console.log(res);*/

// С return
/*function summ(a, b) {
  const result = a + b;
  return result;
}
let res = summ(50, 35);
console.log(res);*/
// 1:22:00


// ===== 6.3 Функция как аргумент =====
/*
// 1 вариант
function summ(a, b) {
  return a + b;
}
console.log(summ(10, 15));*/

/*// 2 вариант
function summ(a, b) {
  return a + b;
}
const result = summ(summ(15, 15), summ(20, 20))
console.log(result);*/

/*// 3 вариант
function summ(a, b) {
  return a + b;
}
const result = summ(30, 40);
console.log(result);*/

/*// 4 сложный вариант
function summ(a, b) {
  return a + b;
}

function dosomething(func) { // Функция колбек
  let x = 10;
  let y = 15;
  let result = func(x, y);
  console.log(result);
}
dosomething(summ)*/

/*// 5 сложный вариант
function summ(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function dosomething(func) { // Функция колбек
  let x = 10;
  let y = 15;
  let result = func(x, y);
  console.log(result);
}
dosomething(summ) // 25
dosomething(diff); // -5*/

/*// 6 сложный вариант
function summ(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function dosomething(func) { // Функция колбек
  let result = func(25, 3);
  console.log(result);
}
dosomething(summ) // 28
dosomething(diff); // 22*/


// ===== 6.4 Самовызывающаяся функция IIFE=====
// аббревиатура IIFE - «immediately-invoked function expressions» 
/*// 1 вариант
(function sayHi () {// Круглые скобки тоже задают выражение
  console.log('Привет, дорогой пользователь!');
})

(); // Выпольнила выражение*/

/*// 2 вариант
(function summ (a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
})

(10, 15);*/

/*// 3 вариант
(function summ (a, b) {
  console.log(a + b);
})

(10, 15);*/

/*// 4 вариант
let res = (function summ (a, b) {
  return a + b;
})

(10, 15);
console.log(res);*/
// 1:39:22


// ===== 6.5 Стрелочные функции =====
/*// 1.Обычная функция
function sayHi(name) {
  console.log(`Привет, ${name}! Как твои дела?`);
}
sayHi('Марк');

// 1.Стрелочная функция
const sayHi2 = (name) => {
  console.log(`Привет, ${name}! Как твои дела?`);
}
sayHi2('Пётр');

// Сократили стрелочную функцию
const sayHi2 = (name) => console.log(`Привет, ${name}! Как твои дела?`);
sayHi2('Пётр');*/


/*// 2.Обычная функция
function summ1(a, b) {
  return a + b;
}
const result = summ1(0, 4);
console.log(result);

// 2.Стрелочная функция
const summ2 = (a, b) => {
  return a + b;
}
const res2 = summ2(5, 2);
console.log(res2);

// 2.1 Ещё короче стрелочная функция
const summ3 = (a, b) => a + b;
const res3 = summ2(7, 10);
console.log(res3);*/
// 1:48:00


// ===== 7 Массивы =====
/*//Обычный
const autoBrand1 = 'Audi';
const autoBrand2 = 'BMW';
const autoBrand3 = 'Mazda';
const autoBrand4 = 'Toyota';
console.log(autoBrand1, autoBrand2, autoBrand3, autoBrand4);*/

/*//В квадратные скобки(это массив) перечисляем что нам надо
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
//Если мы хотим вывести одного из них, то вводим порядковый номер. Счёт начинается с 0, значит наша Audio имеет номер 0
console.log(autoBrands[0]);
console.log(autoBrands[2]);
//Если мы хотим узнать сколько у нас элементов в массиве
console.log(autoBrands.length);//length - длина массива, кол-во элементов*/

/*//В массиве могут присуствовать любые данные
const autoBrands = ['Audio', 5, 'BMW', true, 'Mazda', 'Toyota'];
console.log(autoBrands);*/

/*//Вложеный
const autoBrands = ['Audio', 5, 'BMW', true, ['Mazda', 'Toyota'], 70];
console.log(autoBrands);*/


// ===== 7.1 Методы массивов =====
/*
.push(), .pop(), shift(), unshift(), .splice(), .slice(), .forEach(), .indexOf(), .includes()
*/

/*
arr.push(items) - Добавить элемент в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из начала массива
arr.unshift(...items) - Добавить элемент в начало массива
arr.splice([start], [deleteCout, newElements])
*/

/*const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
autoBrands.push('Nissan');
console.log(autoBrands);*/

/*// array2 ссылается на массив autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota']
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
let array2 = autoBrands//в браузере true*/
/*//или
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
let array2 = ['Audio', 'BMW', 'Mazda', 'Toyota'];//в браузере в консоле поставил array2 === autoBrands, получили false*/

/*const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
autoBrands.push('Nissan');
console.log(autoBrands);
// Удаляем(deleteCout) с номера 2, newElements количество удаление элемента 1
// autoBrands.splice(2, 1); //Удалилась Mazda
autoBrands.splice(2, 2); //Удалилась Mazda, Toyota
console.log(autoBrands);*/


// ===== 8 Циклы =====
/*console.log('Start');
for (let i = 0; i < 10; i++ ) { //Если i < 10; заменить на true, цикл будет вечный
  console.log(i); // Сколько раз выполняется тело цикла
}
console.log('Finish');*/

/*console.log('Start');
for (let i = 0; i < 10; i = i + 2 ) { //Выводим счётные в консоле
  console.log(i); 
}
console.log('Finish');*/

/*console.log('Start');
for (let i = 0; i <= 10; i = i + 2 ) { //Выводим счётные в консоле и на 10-ом цикл остановиться
  console.log(i); 
}
console.log('Finish');*/


// ===== 9. Обход массива циклом for =====
//Обычный массив
/*const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);
console.log(autoBrands[3]);
console.log(autoBrands[4]);*/

/*// 1.Обход массива циклом for
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
for (i = 0; i < 5; i++) {
  console.log(autoBrands[i]);
}*/

/*// 2.Обход массива циклом for, кто под каким номером.
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
for (i = 0; i < 4; i++) {
  console.log(i);
  console.log(autoBrands[i]);
}*/

/*// 3.Обход массива циклом for.
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
for (i = 0; i < autoBrands.length; i++) {
  console.log(autoBrands[i]);
}*/
// 2:18:37


// ===== 10. Обход массива циклом for ( of ) =====
/*const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
for (let item of autoBrands) {
  console.log(item);
}*/


// ===== 11. Обход массива методом forEach() =====
/*// 1 вариант
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach(function (brand, i) {
  console.log(`${brand} => ${i}`);
})*/

/*// 2 вариант
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach(printBrand);
function printBrand (brand, i) {
  console.log(`${brand} => ${i}`);
}*/

/*// 3.1 вариант
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach((brand, i) => {
  console.log(`${brand} => ${i}`);
});*/

/*// 3.2 вариант в одну строку
const autoBrands = ['Audio', 'BMW', 'Mazda', 'Toyota'];
autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));*/


// ===== 12. Объекты =====
/*// Свойства объектов
let userName = 'Марк';
let age = 30;
let isMarried = false;*/

//Структура объектов
/*const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false
}
console.log(person);
console.log(person.userName);//Обратились к Марку
console.log(person['age']);//Обратились через квадратные скобки*/

/*//1.1 Обратились к profession
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  profession: 'Designer'
}
console.log(person);
console.log(person.userName);
console.log(person['age']);
let propertyName = 'profession';
console.log(person[propertyName]);*/

/*//1.2 Обратились к profession - 'JS developer'
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false
}
console.log(person);
console.log(person.userName);
person.profession ='JS developer';
console.log(person);*/

/*//1.3 Обратились к profession - удаляем
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false
}
console.log(person);
console.log(person.userName);
person.profession ='JS developer';
console.log(person);
//Удалим age
delete person.age;
console.log(person);*/


// ===== 13. Методы в объектах =====
/*// 1 вариант - объект
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  sayHi: function () {//function - метод
    console.log('Привет!');
  }
};
person.sayHi()*/

/*// 2 вариант - объект
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
};
person.sayHi = function () {//function - метод
  console.log('Привет!');
}
person.sayHi()*/

/*// 3 вариант - объект
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
};
person.sayHi = function (name) {//function - метод
  console.log(`Привет, ${name}!`);
}
person.sayHi('Юрий')//В consol-е - "Привет, Юрий!"*/

/*// 4 вариант - объект с sayHi
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  sayHi: function (name) {//function - метод
    console.log(`Привет, ${name}!`);
  }  
};
person.sayHi('Юрий')//В consol-е - "Привет, Юрий!"*/
//2:42:35


// ===== 14. Ключевое слово this =====
/*// 1.вариант
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  sayHi: function (name) {//function - метод
    console.log(`Привет, ${name}! Меня зовут Марк.`);
  }  
};
person.sayHi('Юрий')*/

/*// 2.вариант
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  sayHi: function (name) {//function - метод
    console.log(`Привет, ${name}! Меня зовут ${person.userName}.`);
  }  
};
person.sayHi('Юрий')*/

/*// 3.вариант
const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  sayHi: function (name) {//function - метод
    // console.log(this);
    console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);
  }  
};
person.sayHi('Юрий')*/


// ===== 15. Объекты обход циклом for in (не путать с for of) =====
// В отличие от for ... of - for .. in может обходить неинтегрируемые объекты и возвращает ключи.

/*const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  sayHi: function (yourName) {//function - метод
    // console.log(this);
    console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
  }  
};
// Обход циклом for in
for (let key in person) {
  // console.log(key);
  console.log(key, ':', person[key]);
}*/


// ===== 16. Нюансы const и изменением объекта и массива =====
/*const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
};
person.proff = 'Designer';

//Ошибка! Переопределение ссылки на новый объект
person = {
  userName: 'Ник',
};*/


// ===== 17. Классы. Конструкторы объектов =====
// Представим ситуацию когда нам надо описать несколько одинаковых объектов
/*//1.вариант
const person1 = {
  userName: 'Марк',
  age: 30,
  isMaried: false,
  sayHi: function() {
    console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
  }
};

const person2 = {
  userName: 'Павел',
  age: 28,
  isMaried: true,
  sayHi: function() {
    console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
  }
};*/

// Опишем класс, это как чертеж для всех будущих объектов person которые будут создаваться на его основе
//2.вариант
/*class Person {
  constructor(userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }
  sayHi(name) {
    console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);
  }
}
const person1 = new Person('Марк', 30, false);
const person2 = new Person('Павел', 28, true);
console.log(person1);
// console.log(person2);
person1.sayHi('Юрий')
person2.sayHi('Юрий')*/
// 3:02:00


// ===== Лайфхак работы с VS Code =====
//Ctrl + L;(сворачивает) Ctrl + 0(не боковой ноль, а выше) 

// ===== Выбор DOM элементов =====
// Выбор одного элемента DOM по селектору
// document.querySelector('selector');
/*document.querySelector('h2') // поиск по тегу
document.querySelector('.dom-example') // поиск по классу
document.querySelector('#heading-1') // поиск по id
document.querySelector('header.header nav.nav li.link a') // 1.поиск по кусковым селекторам
document.querySelector('header .nav .link a') // 2.поиск по кусковым селекторам*/

/*const header = document.querySelector('h2');
console.log(header);*/

/*//1.вариант. Меняем цвет bordera у класса
document.querySelector('h2').classList.add('red')*/

/*//2.вариант. Меняем цвет bordera у класса
const heading2 = document.querySelector('h2');
heading2.classList.add('blue');*/

/*//3.вариант. Меняем цвет bordera у класса
document.querySelector('.heading-3').classList.add('green');*/
// 3:12:12


// Выбор коллекции элементов
// 1.вариант. slonik1
/*const headings = document.querySelectorAll('h2');
console.log(headings);
headings.classList.add('red-text');*/

/*// 2.вариант.
const headings = document.querySelectorAll('h2');
console.log(headings);
for (let item of headings) {
  console.log(item);
}*/

/*// 3.вариант.
const headings = document.querySelectorAll('h2');
console.log(headings);
for (let item of headings) {
  item.classList.add('red-text')
}*/

/*// 4.1.вариант. Обход slonik2
const headings = document.querySelectorAll('h2');
for (let heading of headings) {
  heading.classList.add('red-text')
}

// 4.2.1.вариант. Обход slonik3
const paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
  p.classList.add('green-text');
}*/

/*// 4.2.2.1.вариант. Обход slonik4
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach (function (item) {
  item.classList.add('green-text');
})*/

/*// 4.2.2.2.вариант. Обход slonik5
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach (function (p) {
  p.classList.add('green-text');
})*/

/*// Также есть следующие методы
document.getElementsByClassName('red-text');//выбор коллекции элементов по CSS классу
document.getElementsByTagName('h2');//выбор коллекции элементов по Тегу
document.getElementById('heading-1');//выбор коллекции элементов по ID*/
//3:23:23

// ===== Работа с CSS классами =====
/*
element.classList.add()
.add() //добавляем
.remove() //удаляем
.togle() //преключаем
.contains() //Метод contains () используется для определения того, содержит ли коллекция данный элемент или нет. Если он содержит элемент, то он возвращает true, в противном случае false.
*/

/*// 1.вариант
const heading = document.querySelector('h2');
console.log(heading);
heading.classList.add('red-text');
heading.classList.remove('red-text');
heading.classList.toggle('green-text');
heading.classList.toggle('green');*/

/*// 2.вариант метод toggle
const heading = document.querySelector('h2');
console.log(heading);
heading.classList.add('red-text');
heading.classList.remove('red-text');
const res = heading.classList.toggle('green-text');
if (res) {

} else {

}*/

/*// 3.1.вариант метод contains
const heading = document.querySelector('h2');
heading.classList.contains('green');//true с другим классом будет false(его нет в h2)*/

/*// 3.2.вариант метод contains
const heading = document.querySelector('h2');
const res = heading.classList.contains('green');
if (res) {

}*/

/*// 3.3.1.вариант метод contains
const heading = document.querySelector('h2');
if (heading.classList.contains('green')) {

} else {
  
}*/

/*// 3.3.2.1.вариант метод contains c true
const heading = document.querySelector('h2');
if (true) {

}*/

/*// 3.3.2.2.вариант метод contains c false
const heading = document.querySelector('h2');
if (false) {

}*/


// ===== Работа с атрибутами =====
/*
getAttribute(attrName) - возвращает значение указанного фтрибута 
setAttribute(name, value) - добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) - возвращает true при налисии у элемента указанного атрибута
removeAttribute(attrName) - удаляет указаный атрибут

toggLeAttribute(name, force) - добавляет новый атрибут при отсуствии или удаляет существующий атрибут.
hosattributes() - возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() - возвращает названия атрибутов элемента
*/

/*//1. вариант с getAttribute - покажет значение атрибута
const img = document.querySelector('#logo')
img.getAttribute('src');//<- скопировал и вставил в console, покажет значение атрибута*/

/*//2.1 вариант с getAttribute - покажет значение атрибута
const img = document.querySelector('#logo')
const srcValue = img.getAttribute('src');
console.log(srcValue);//покажет значение атрибута
//Поменяли картинку на другую*/

/*//2.1.2 вариант с getAttribute - покажет значение атрибута
const img = document.querySelector('#logo')
const srcValue = img.getAttribute('src');
console.log(srcValue);
//Поменяли картинку на другую
img.setAttribute('src', './img/php.png');
//Меняем размер картинки
img.setAttribute('width', '200');
//Вернули картинку до смены которая была
img.setAttribute('src', './img/js.png');*/

/*//2.1.3 вариант с getAttribute - покажет значение атрибута
const img = document.querySelector('#logo')
//Поменяли картинку на другую
img.setAttribute('src', './img/php.png');
//Меняем размер картинки
img.setAttribute('width', '200');
//Вернули картинку до смены которая была
img.setAttribute('src', './img/js.png');*/

/*//3.1 вариант с getAttribute - button
const button = document.querySelector('#button');
//Поменяли название у кнопки
button.setAttribute('value', 'Отправить');*/

/*//3.2 вариант с getAttribute - button
const button = document.querySelector('#button');
//Поменяли название у кнопки
button.value = "Текст для кнопки";*/


// ===== Работа с прослушкой событий =====
/*//1.1.вариант удаляем картинку через кнопку
const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'Удалить';
button.addEventListener('click', function() {
  console.log('Click!');
  img.remove();
})*/

/*//1.2.вариант удаляем картинку через кнопку
const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'Удалить';

button.onclick = function() {
  console.log('Click!');
  img.remove();
}*/


//Чем отличается addEventListener от onclick? addEventListener можно добавить сколько угодно и он добавить все в консоле

/*//1.3.1 вариант(addEventListener) Посути мы можем поставить несколько обработчиков для одинаковых событий.
const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'Удалить';
button.addEventListener('click', function() {
  console.log('Click 1!');
});
button.addEventListener('click', function() {
  console.log('Click 2!');
});
button.addEventListener('click', function() {
  console.log('Click 3!');
});*/

/*//1.3.2 вариант(onclick) Он сначала добавляет первый обработчик Click 1!, но если мы напишем ещё один обработчик(Click 2!), то консоль покажет последний написаный.
const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'Удалить';
button.onclick = function() {
  console.log('Click 1!');
  img.remove();
};
button.onclick = function() {
  console.log('Click 2!');
  img.remove();
};
button.onclick = function() {
  console.log('Click 3!');
  img.remove();
};*/
//3:49:51



// ===== Прослушка событий. Ввод текста =====
/*//1.1 вариант
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');
inputText.addEventListener('input', function() {
  console.log('Input!');
});*/

/*//1.2 вариант
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');
inputText.addEventListener('input', function() {
  //Покажет ввод текста в Инпуте
  console.log(inputText.value);
});*/

/*//1.3 вариант
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');
inputText.addEventListener('input', function() {
  console.log(inputText.value);
  //После ввода текста в инпуте, покажет под ним 123 
  textBlock.innerText = '123';
});*/

/*//1.4.1 вариант
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');
inputText.addEventListener('input', function() {
  console.log(inputText.value);
  //После ввода текста в инпуте, покажет под ним что Вы вводили в инпуте. 
  textBlock.innerText = inputText.value;
});*/

/*//1.4.2 вариант. Через стрелочную функцию.
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');
inputText.addEventListener('input', () => {
  console.log(inputText.value);
  //После ввода текста в инпуте, покажет под ним что Вы вводили в инпуте. 
  textBlock.innerText = inputText.value;
});*/

/*//1.4.3 вариант. Через inputHandler.
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');
inputText.addEventListener('input', inputHandler);
function inputHandler() {
  console.log(inputText.value);
  //После ввода текста в инпуте, покажет под ним что Вы вводили в инпуте. 
  textBlock.innerText = inputText.value;
};*/



// ===== Объекты event =====
/*//1.1 вариант
const list = document.querySelector('#list');
//В браузере нажимаем налюбого из списка, результат выйдет в консоле.
list.addEventListener('click', function() {
  console.log(this);
});*/

/*//1.2 вариант с event 
const list = document.querySelector('#list');
//В браузере нажимаем налюбого из списка, результат выйдет в консоле.
list.addEventListener('click', function(event) {
  console.log(this);
  console.log(event);//В консоле покажет PointerEvent
});*/

/*//1.3.1 вариант с event.target
const list = document.querySelector('#list');
//В браузере нажимаем налюбого из списка, результат выйдет в консоле.
list.addEventListener('click', function(event) {
  console.log(event.target);//В консоле покажет на кого именно нажимали
});*/

/*//1.3.2 вариант с параметром (e.target)
const list = document.querySelector('#list');
//В браузере нажимаем налюбого из списка, результат выйдет в консоле.
list.addEventListener('click', function(e) {
  console.log(e.target);//В консоле покажет на кого именно нажимали
});*/
//4:03:16


// ===== Работа c элементами =====
/*
// Создать элемент 
document.createElement('tag-name')

//Изменить HTML содержимое внутри элемента
element.innerHTML =''

Изменить Текстовое содержимое внутри элемента
node.innerText = ''

//Клонирование элемента
node.cloneNode() // true с внутренним содержимым (текст и теги), false - без внутренного содержимого

//вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

/*// Выбор контейнера
const container = document.querySelector('#elementsContainer');
// Создание заголовка
//document.createElement('h1');<- Если его поставить в console, то он покажет все теги с h1 
const newHeader = document.createElement('h1');// newHeader <- Если его поставить в console, то он покажет все теги с h1
newHeader.innerText = 'Новый заголовок';
container.append(newHeader);//Покажет в браузере в <h1>Новый заголовок</h1>*/

/*// Копирование шапки
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true)//Без true склонирует просто фон <header></header> 
container.append(headerCopy);*/

// Вставка разметки через строки
/*// 1 вариант
const htmlExample1 = '<h2>Ещё один заголовок через insertAdjacentHTM</h2>';
container.insertAdjacentHTML('beforeend', htmlExample1);*/
/*// 2 вариант
const htmlExample2 = '<h3>Ещё один заголовок через insertAdjacentText</h3>';
container.insertAdjacentText('beforeend', htmlExample2);*/
/*// 3 вариант. глучит
const htmlExample3 = '<h4>Ещё один заголовок через insertAdjacentElement</h4>';
container.insertAdjacentElement('beforeend', htmlExample3);*/

/*// Вставка разметки через шаблонные строки
const title = 'Текст заголовка';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample)*/


// ===== ToDo список задач =====
/*//1 вариант
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler() {
  console.log('Submit!');//В браузере в инпуте пишим слово и жмём Ентер, появиться в консоле 'Submit!'
}*/

/*//2 вариант
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();//Если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно.
  console.log('Submit!');//В браузере в инпуте пишим слово и жмём Ентер, появиться в консоле 'Submit!'
}*/

/*//3 вариант
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;
  console.log(taskText);
}*/

/*//4 вариант
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li через разметку
  const li = `<li>${taskText}</li>`;
  console.log(li);
}*/

/*//5 вариант
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li через разметку
  const li = `<li>${taskText}</li>`;
  
  //Добавляем разметку на страницу
  todoList.insertAdjacentHTML('beforeend', li);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}*/

/*//6 вариант
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}*/

/*//7 вариант по сложнее
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;
  console.log(newTask);

  //Создаём кнопку удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);
  console.log(newTask);

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}*/

/*//8 вариант по сложнее
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  //Создаём кнопку удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  //Добовляем событие по клику
  deleteBtn.addEventListener('click', function () {
    console.log(this);
    this.closest('li').remove();
  });

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}*/

/*//9 вариант по сложнее
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  //Создаём кнопку удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  //Добовляем событие по клику
  // deleteBtn.addEventListener('click', deleteTask);
  deleteBtn.addEventListener('click', deleteTask); 

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}

function deleteTask() {
    this.closest('li').remove();
  };*/

/*//10 вариант по сложнее по короче
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  //Создаём кнопку удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  //Добовляем событие по клику
  // deleteBtn.addEventListener('click', deleteTask);
  deleteBtn.addEventListener('click', function () {
    this.closest('li').remove();
  }); 

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
};*/

/*//11 вариант стрелочная функция
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  //Создаём кнопку удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  //Добовляем событие по клику
  deleteBtn.addEventListener('click', () => {
    this.closest('li').remove();
  }); 

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}*/

/*//12 вариант стрелочная функция по короче
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  //Создаём кнопку удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  //Добовляем событие по клику
  //deleteBtn.addEventListener('click', () => console.log(this)); 
  // deleteBtn.addEventListener('click', () => this.closest('li').remove()); null - показывал
  deleteBtn.addEventListener('click', (e) => e.target.closest('li').remove());

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}*/

/*//13 вариант стрелочная функция лучше всех вариант
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form2');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);
function formHandler(event) {
  event.preventDefault();

  //Получаем название задачи из инпута
  const taskText = todoInput.value;

  //Создаём тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  //Создаём кнопку удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  //Добовляем событие по клику
  deleteBtn.addEventListener('click', function() { 
    this.closest('li').remove()
  });

  //Добавляем элемент на страницу
  todoList.append(newTask);

  //Очищаем поле ввода
  todoInput.value = '';

  //Фокус на поле ввода
  todoInput.focus();
}*/

//4:40:40


// ===== setInterval =====
/*// 1.Вариант setInterval
setInterval(function () {
  console.log('Fired!');
}, 1000);*/

/*// 2.Вариант 
const timeIntervalID = setInterval(function () {
  console.log('Fired!');
}, 1000);

//Останавливаем интервал
//clearInterval(timeIntervalID);//<- Его можно вставить в консоль и он остановить таймер*/


// ===== setTimeOut =====
/*// 1.Вариант setTimeOut
setTimeout(function () {
  console.log('setTimeout Fired!');  
}, 2000);*/

/*// 2.Вариант 
const timerID = setTimeout(function () {
  console.log('setTimeout Fired!');  
}, 2000);
clearInterval(timerID);*/


// ===== setInterval + setTimeOut =====
/*// 1.Вариант
const timerID = setInterval(function () {
  console.log('setInterval Fired!');  
}, 1000)
//Остановиться через 10 секунд
setTimeout(function () {
  clearInterval(timerID);
}, 10000);*/


//Практика
// ===== Секундомер =====
/*// 1.Вариант Счётчик
let counter = 0;
setInterval(function() {
  counter = counter + 1;
  console.log(counter);
}, 1000)*/

/*// 2.Вариант Счётчик по короче
let counter = 0;
setInterval(function() {
  counter += 1;
  console.log(counter);
}, 1000)*/

/*// 3.Вариант Счётчик ещё короче
let counter = 0;
setInterval(function() {
  counter ++;
  console.log(counter);
}, 1000);*/

/*// 4.Вариант Счётчик Практика
const counterElement = document.querySelector('#counter');
let counter = 0;
setInterval(function() {
  counter ++;
  //console.log(counter);
  counterElement.innerText = counter;
}, 1000);*/

/*// 5.Вариант Счётчик Практика
const counterElement = document.querySelector('#counter');
let counter = 0;
//Старт
const btnStart = document.querySelector('#start')
btnStart.onclick = function () {
  setInterval(function() {
    counter ++;
    counterElement.innerText = counter;
  }, 1000);
}*/

/*// 6.Вариант Счётчик Практика
const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;
//Старт
const btnStart = document.querySelector('#start')
btnStart.onclick = function () {
  console.log('btnStart')//Чтобы в консоле увидит старт
  timerID = setInterval(function() {
    counter ++;
    counterElement.innerText = counter;
  }, 1000);
}
//Стоп
const btnStop = document.querySelector('#stop');
btnStop.onclick = function () {
  console.log('btnStop')//Чтобы в консоле увидит стоп
  clearInterval(timerID);//Останавливает
}
//Сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
  counter = 0;//Сбрасываем
  counterElement.innerText = counter;//Будет показывать счёт с 0
  clearInterval(timerID);
};*/
//5:03:42


// ===== Callback. Callback hell =====
/*// 1. Вариант
console.log('Start');

setTimeout(function () {
  console.log('Print after 2s');
}, 2000);
console.log('Finish');*/

/*// 2. Вариант будет последовательно идти в консоле
console.log('Start');

setTimeout(function () {
  console.log('Print after 2s');
  console.log('Finish');
}, 2000);*/

/*// 3. Вариант 3 действия
//1.Шаг
setTimeout(function () {
  console.log('Step 1');
}, 2000);
//2.Шаг
setTimeout(function () {
  console.log('Step 2');
}, 1500);
//3.Шаг
setTimeout(function () {
  console.log('Step 3');
}, 1000);*/

/*// 4. Вариант в правильном порядке
//1.Шаг
setTimeout(function () {
  console.log('Step 1');
  //2.Шаг
  setTimeout(function () {
    console.log('Step 2');
    //3.Шаг
    setTimeout(function () {
      console.log('Step 3');
    }, 1000);
  }, 1500);
}, 2000);*/


// ===== Callback. Callback hell Пример с отпуском. [осторожно, взрыв мозга!] =====
/*// 1. Вариант
  function checkRooms() {
  console.log('Проверяем номера в отеле...');
  const availableRooms = true;
  return availableRooms;
}
if (checkRooms()) {
  console.log('Номера есть!');
  console.log('Едем в отпуск! 🌴 :)');
} else {
  console.log('Номеров нет.');
  console.log('Отпуск отменяется 😥 :(');
}*/

/*// 2. Вариант правильный распорядок кода
function checkRooms() {
  setTimeout(function() {
    console.log('Проверяем номера в отеле...');
    const availableRooms = false;//true   
    if (availableRooms) {
      console.log('Номера есть!');
      console.log('Едем в отпуск! 🌴 :)');
    } else {
      console.log('Номеров нет.');
      console.log('Отпуск отменяется 😥 :(');
    }
  }, 1000)
}
checkRooms();*/

/*// 3.1 Вариант Проверяем билеты ✈
function checkRooms() {
  setTimeout(function() {
    console.log('Проверяем номера в отеле...');
    const availableRooms = false;//true

    if (availableRooms) {
      let message = 'Номера есть';
      submitVacation(message)
    } else {
      let message = 'Номеров НЕТ';
      cancelVacation(message)
    }
  }, 1000)
}
checkRooms()

function cancelVacation(message) {
  console.log('---- cancelVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Отпуск отменяется 😥 :(');
}

function submitVacation(message) {
  console.log('---- submitVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Едем в отпуск! 🌴 :)');
}*/

/*// 3.2 Вариант Проверяем билеты ✈ Универсальная функция
function checkRooms(success, failed) {
  setTimeout(function() {
    console.log('Проверяем номера в отеле...');
    const availableRooms = true;//false

    if (availableRooms) {
      let message = 'Номера есть';
      success(message)
    } else {
      let message = 'Номеров НЕТ';
      failed(message)
    }
  }, 1000)
}
checkRooms(submitVacation, cancelVacation)

function cancelVacation(message) {
  console.log('---- cancelVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Отпуск отменяется 😥 :(');
}

function submitVacation(message) {
  console.log('---- submitVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Едем в отпуск! 🌴 :)');
}*/

/*// 3.3 Вариант Проверяем билеты ✈ Сложнее
function checkRooms(success, failed) {
  setTimeout(function() {
    console.log('Проверяем номера в отеле...');
    const availableRooms = true;//false

    if (availableRooms) {
      let message = 'Номера есть';
      success(message)
    } else {
      let message = 'Номеров НЕТ';
      failed(message)
    }
  }, 1000)
}
checkRooms(function(messageFromCheckRooms){
  submitVacation(messageFromCheckRooms)
}, function(messageFromCheckRooms){
    cancelVacation(messageFromCheckRooms)
  })

function cancelVacation(message) {
  console.log('---- cancelVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Отпуск отменяется 😥 :(');
}

function submitVacation(message) {
  console.log('---- submitVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Едем в отпуск! 🌴 :)');
}*/

/*// 3.4 Вариант Проверка авиабилетов ✈ 
function checkRooms(success, failed) {
  setTimeout(function() {
    console.log('Проверяем номера в отеле...');
    const availableRooms = true;//false

    if (availableRooms) {
      let message = 'Номера есть';
      success(message)
    } else {
      let message = 'Номеров НЕТ';
      failed(message)
    }
  }, 1000)
}

function checkTickets(message, success, failed){
  setTimeout(function(){
    console.log('---- function checkTickets ----');
    console.log('Ответ на предыдущем шаге:', message);
    console.log('Проверяем авиабилеты...');
    // ---- код который отправляет запрос в авиакомпанию ----
    const aviacheckTickets = true;
    if (aviacheckTickets) {
      let message = 'Билеты есть';
      success(message)
    } else {
      let message = 'Билетов НЕТ';
      failed(message)
    }
  }, 500)
}

function cancelVacation(message) {
  console.log('---- cancelVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Отпуск отменяется 😥 :(');
}

function submitVacation(message) {
  console.log('---- submitVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Едем в отпуск! 🌴 :)');
}

checkRooms(
  function(messageFromCheckRooms){
    checkTickets(
      messageFromCheckRooms, 
      function(messageFromCheckTickets){
        submitVacation(messageFromCheckTickets)
      },
      function(messageFromCheckTickets) {
        cancelVacation(messageFromCheckTickets) 
      }
    )
  }, 
  function(messageFromCheckRooms){
    cancelVacation(messageFromCheckRooms)
  }
);*/

/*// 3.5 Вариант Проверка авиабилетов ✈ Упростили код. Лучше не упрощать этот код
function checkRooms(success, failed) {
  setTimeout(function() {
    console.log('Проверяем номера в отеле...');
    const availableRooms = true;//false

    if (availableRooms) {
      let message = 'Номера есть';
      success(message)
    } else {
      let message = 'Номеров НЕТ';
      failed(message)
    }
  }, 1000)
}

function checkTickets(message, success, failed){
  setTimeout(function(){
    console.log('---- function checkTickets ----');
    console.log('Ответ на предыдущем шаге:', message);
    console.log('Проверяем авиабилеты...');
    // ---- код который отправляет запрос в авиакомпанию ----
    const aviacheckTickets = true;
    if (aviacheckTickets) {
      let message = 'Билеты есть';
      success(message)
    } else {
      let message = 'Билетов НЕТ';
      failed(message)
    }
  }, 500)
}

function cancelVacation(message) {
  console.log('---- cancelVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Отпуск отменяется 😥 :(');
}

function submitVacation(message) {
  console.log('---- submitVacation ----');
  console.log('Ответ на предыдущем шаге:', message);
  console.log('Едем в отпуск! 🌴 :)');
}

checkRooms(
  function(messageFromCheckRooms){
    checkTickets(
      messageFromCheckRooms, 
      //Упрощаем код
      submitVacation,      
      cancelVacation)
  }, 
  //Упрощаем код
  cancelVacation
);*/
//5:33:22


// ===== Создание промиса =====
/*// 1.1 Вариант
const myPromise = new Promise(function(resolve, reject){
  console.log('Promise created');
  setTimeout(function(){
    // -- запрос на сервер
    const response = true;//false
    if (response) {
      resolve();
    } else {
      reject();
    }
  }, 1000)
});

myPromise.then(function(){
  console.log('Then');
}).catch(function(){//обработка reject в случие не удачи
  console.log('Catch');
})*/

/*// 1.2 Вариант Передача данных
const myPromise = new Promise(function(resolve, reject){
  console.log('Promise created');
  setTimeout(function(){
    // -- запрос на сервер
    const response = true;//false
    if (response) {
      let message = "SUCCESS"
      resolve(message);
    } else {
      let message = "FAILED"
      reject(message);
    }
  }, 1000)
});

myPromise.then(function(data){
  console.log('Then');
  console.log(data);
}).catch(function(){//обработка reject в случие не удачи
  console.log('Catch');
  console.log(data);
})*/

/*// 1.3 Вариант Упрощённый код
const myPromise = new Promise(function(resolve, reject){
  console.log('Promise created');
  setTimeout(function(){
    // -- запрос на сервер
    const response = true;//false
    if (response) {
      let message = "SUCCESS"
      resolve(message);
    } else {
      let message = "FAILED"
      reject(message);
    }
  }, 1000)
}).then(function(data){
  console.log('Then');
  console.log(data);
}).catch(function(){//обработка reject в случие не удачи
  console.log('Catch');
  console.log(data);
})*/

// ===== Promise. Цепочки then ===== 
/*// 1.4 Вариант Возвращаем данные из сервера
const myPromise = new Promise(function(resolve, reject){
  console.log('Promise created');
  setTimeout(function(){
    // -- запрос на сервер
    const response = true;//false
    if (response) {
      let message = "SUCCESS"
      resolve(message);
    } else {
      let message = "FAILED"
      reject(message);
    }
  }, 1000)
})
myPromise.then(function(data){
  console.log('Then 1');
  console.log(data);
  return 'Data from then 1'
}).then(function(data){
  console.log('Then 2');
  console.log(data); 
}).catch(function(){//обработка reject в случие не удачи
  console.log('Catch');
  console.log(data);
});*/
//5:43:45


// ==== Promise. Цепочки then c асинхронными действиями [осторожно, взрыв мозга!] ====
/*// 1.5 Вариант Возвращаем данные из сервера
const myPromise = new Promise(function(resolve, reject){
  console.log('Promise created');
  setTimeout(function(){
    // -- запрос на сервер
    const response = true;//false
    if (response) {
      let message = "SUCCESS"
      resolve(message);
    } else {
      let message = "FAILED"
      reject(message);
    }
  }, 1500)
})
myPromise.then(function(data){
  //Цепочка then
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('Then 1');
      console.log(data);
      //Цепочка then
      const response = true;
      if (response) {
        resolve('Data from then 1');
      } else {
        reject('Data from then 1')
      }
    }, 1000)  
  })
  
}).then(function(data){
  setTimeout(() => {
    console.log('Then 2');
    console.log(data);
  }, 500) 
}).catch(function(data){//обработка reject в случие не удачи
  console.log('Catch');
  console.log(data);
});*/


// ==== Цепочка промисов. Несколько промисов с setTimeout ====
/*// 1.1 Вариант
const checkRooms = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Проверяем номера в отеле...');
    const availableRooms = true;//false
    console.log(availableRooms);
    if (availableRooms) {
      resolve('Номера есть!');
    }else {
      reject('Номеров нет.');
    }
  }, 1500)
});
//Вывод данных которые получили от промиса
checkRooms.then(function(data){
  console.log('---- then 1 ----');
  console.log('Ответ на предыдущем шаге:', data);
  console.log('Едем в отпуск! 🌴 :)');  
}).catch(function(data) {
    console.log('---- catch ----');
    console.log('Ответ на предыдущем шаге:', data);    
    console.log('Отпуск отменяется 😥 :(');
  });*/

/*// 1.2 Вариант Запрос данных на авиабилеты
const checkRooms = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Проверяем номера в отеле...');
    const availableRooms = false;//true
    console.log(availableRooms);
    if (availableRooms) {
      resolve('Номера есть!');
    }else {
      reject('Номеров нет.');
    }
  }, 1500)
});
checkRooms.then(function(data){
  //Запустили функцию resolve, reject и проверяем их
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      //Вывод данных которые получили от функции
      console.log('---- then 1 ----');
      console.log('Ответ на предыдущем шаге:', data);   
      console.log('Проверяем авиабилеты...');
      const aviacheckTickets = true;//false
      if (aviacheckTickets) {
        let message = 'Билеты есть';
        resolve(message);
      } else {
        let message = 'Билетов нет';
        reject(message);
      }
    }, 1000)
  });
  //Вывод данных которые получили от промиса
}).catch(function(data) {
  console.log('---- catch ----');
  console.log('Ответ на предыдущем шаге:', data);    
  console.log('Отпуск отменяется 😥 :(');
});*/

/*// 1.3 Вариант Дописываем следующий them
const checkRooms = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Проверяем номера в отеле...');
    const availableRooms = true;//false
    console.log(availableRooms);
    if (availableRooms) {
      resolve('Номера есть!');
    }else {
      reject('Номеров нет.');
    }
  }, 1500)
});
checkRooms.then(function(data){
  //Запустили функцию resolve, reject и проверяем их
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      //Вывод данных которые получили от функции
      console.log('---- then 1 ----');
      console.log('Ответ на предыдущем шаге:', data);   
      console.log('Проверяем авиабилеты...');
      const aviacheckTickets = true;//false
      if (aviacheckTickets) {
        let message = 'Билеты есть';
        resolve(message);
      } else {
        let message = 'Билетов нет';
        reject(message);
      }
    }, 1000)
  });
  //Вывод данных которые получили от промиса
  // Дописываем второй them
}).then(function(data){
  console.log('---- then 2 ----');
  console.log('Ответ на предыдущем шаге:', data); 
  console.log('Едем в отпуск! 🌴 :)'); 
}).catch(function(data) {
  console.log('---- catch ----');
  console.log('Ответ на предыдущем шаге:', data);    
  console.log('Отпуск отменяется 😥 :(');
});*/


// ==== Цепочка промисов. Отдельные функции. Несколько промисов с setTimeout ====
/*// 1.4 Вариант Дописываем следующий them Обернули код. Так удобнее код выглядить.
//Обернули в функцию checkTickets в цепочку success и failed
checkRooms()
  .then(checkTickets)
  .then(success)
  .catch(failed)
//Обернули в функцию checkRooms
function checkRooms (){
  //Возвращает на промис где она вызвана
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('Проверяем номера в отеле...');
      const availableRooms = true;//false
      console.log(availableRooms);
      if (availableRooms) {
        resolve('Номера есть!');
      }else {
        reject('Номеров нет.');
      }
    }, 1500)
  });
}
//Проверка билетов
function checkTickets(data){
  //Запустили функцию resolve, reject и проверяем их
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      //Вывод данных которые получили от функции
      console.log('---- then 1 ----');
      console.log('Ответ на предыдущем шаге:', data);   
      console.log('Проверяем авиабилеты...');
      const aviacheckTickets = true;//false
      if (aviacheckTickets) {
        let message = 'Билеты есть';
        resolve(message);
      } else {
        let message = 'Билетов нет';
        reject(message);
      }
    }, 1000)
  });
}
//Обернули в функцию success
function success(data) {
  console.log('---- success ----');
  console.log('Ответ на предыдущем шаге:', data); 
  console.log('Едем в отпуск! 🌴 :)');
}
//Обернули в функцию failed
function failed(data) {
  console.log('---- failed ----');
  console.log('Ответ на предыдущем шаге:', data);    
  console.log('Отпуск отменяется 😥 :(');
}*/
//6:11:30


// ==== Async functions. Асинхронные функции. Потребление промиса ====
/*// 1.1 Вариант
function promiseFunction() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      res = 'success';
      if (res == 'success') {
        resolve('DONE!');
      } else {
        reject('FAIL!');
      }
    }, 500);
  });
}*/

/*// 1.2 Вариант Для удобства
function promiseFunction() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = false;//true
      if (result) {
        resolve('DOME!');
      } else {
        reject('FAIL!');
      }
    }, 500);
  })
}
// console.log(promiseFunction());

// Асинхронная функция
async function startPromise(){
  try {
    //Потребляем await промис
    const result = await promiseFunction();
    console.log(result);
  } catch (err) {//в catch ловим сообщение об ошибке
    console.log(err);
  }
}
  
startPromise()*/


// ==== Несколько асинхроных операций. Серия промисов ====
// 1.1 Вариант
function checkRooms() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Проверяем номера в отеле...');
      //--- код который отправляет запрос в отель ---
      let availableRooms = true;//false
      if (availableRooms) {
        resolve('Номера есть!');
      } else {
        reject('Номеров нет.');
      }
    }, 1500);
  });
}

// 1.2 Вариант. Функция принимает данные от checkRooms
function checkTickets(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('--- checkTickets ---');
      console.log('Ответ на предыдущем шаге:', data);

      console.log('Проверяем авиабилеты...');
      //--- код который отправляет запрос в отель ---
      const availableTickets = true;//false
      if (availableTickets) {
        let message = 'Билеты есть';
        resolve(message);
      } else {
        let message = 'Билетов нет';
        reject(message);
      }
    }, 1000);
  });
}

// 1.3 Вариант. Функция submitVacation
function submitVacation(data) {
  console.log('--- submitVacation ---');
  console.log('Ответ на предыдущем шаге:', data);
  console.log('Едем в отпуск! 🌴 :)');
} 

// 1.4 Вариант. Функция cancelVacation
function cancelVacation(data) {
  console.log('--- cancelVacation ---');
  console.log('Ответ на предыдущем шаге:', data);
  console.log('Отпуск отменяется 😥 :(');
}

// 1.5.1 Вариант. Магия асинхроных функций. Цепочка функций. Это не правильный вариант
// async function checkVacation(){
//   const roomsResult = await checkRooms();
//   const ticketsResult = await checkTickets(roomsResult);

//   if(ticketsResult) {
//     submitVacation(ticketsResult)
//   } else {
//     cancelVacation(ticketsResult)
//   }
// }
//Запуск функции
// checkVacation()

// 1.5.2 Вариант через try catch. Это правильный вариант
async function checkVacation(){
  try {
    const roomsResult = await checkRooms();
    const ticketsResult = await checkTickets(roomsResult);
    submitVacation(ticketsResult)
  } catch (err) {//если где то ошибка, то запускается catch (err)
      cancelVacation(err)
  } 
}
//Запуск функции
checkVacation()


// ==== Пример fetch с промисами данных по API ====
// Получать данные будем из сайта - https://www.cbr-xml-daily.ru// json формат - https://www.cbr-xml-daily.ru/daily_json.js

// №1. Получить данные с сервера
/*// Потребить fetch через цепочку then
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(function(data){
    return data.json()
  }).then(function(data){
    console.log(data);
  })*/

/*// 1.1 Вариант Передача данных через асинхронную функцию. Этот вариант более удобен, чем fetch.
async function getCurrencies () {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  console.log(data);
}
getCurrencies();*/

// 1.2 Вариант Передача данных через асинхронную функцию. Этот вариант более удобен, чем fetch.
async function getCurrencies () {
  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  const response = await fetch(url);
  const data = await response.json();
  const usdRate = data.Valute.USD.Value.toFixed(2);//.toFixed(2) после запятой показывать до двух знаков курс валюты
  const eurRate = data.Valute.EUR.Value.toFixed(2);//.toFixed(2) после запятой показывать до двух знаков курс валюты

  // №2. Отобразить эти данные на странице
  const usdElement = document.querySelector('#usd');
  const eurElement = document.querySelector('#eur');

  usdElement.innerText = usdRate;
  eurElement.innerText = eurRate;
}
getCurrencies();

//----------------------------------------


// 1.2.2 Вариант По эксперементируем. Делим на две разные функции.
async function getCurrencies2 () {
  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  const response = await fetch(url);
  const data = await response.json();
  // №2. Отобразить эти данные на странице
  renderRates2(data)
}
getCurrencies2();

//Функция которая рендерит валюту
function renderRates2(data) {
  const cnyRate = data.Valute.CNY.Value.toFixed(2);//.toFixed(2) после запятой показывать до двух знаков курс валюты
  const zarRate = data.Valute.ZAR.Value.toFixed(2);//.toFixed(2) после запятой показывать до двух знаков курс валюты

  const cnyElement = document.querySelector('#cny');
  const zarElement = document.querySelector('#zar');

  cnyElement.innerText = cnyRate;
  zarElement.innerText = zarRate;

}


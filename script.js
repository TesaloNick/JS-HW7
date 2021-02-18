// document.write('Задание 1. Калькулятор.<br>')
// const Calculator = function (digit1, digit2) {
//     this.digit1 = digit1;
//     this.digit2 = digit2;
//     this.inWork = false;
//     this.operation = prompt('Задание 1. Введите математическое действие: +, -, /, *')
//     this.start = function(){
//         this.inWork = true;
//     }
//     this.finish = function(){
//         this.inWork = false;
//     }
//     this.doCalculate = function(){
//         let result = 0;
//         if (this.inWork === false){
//             return document.write('Калькулятор выключен.<br>')
//         } else {
//             switch (this.operation){
//                 case '+':
//                     result = this.digit1 + this.digit2;
//                 break;
//                 case '-':
//                     result = this.digit1 - this.digit2;
//                     break;
//                 case '*':
//                     result = this.digit1 * this.digit2;
//                     break;
//                 case '/':
//                     result = this.digit1 / this.digit2;
//                     break;
//                 default:
//                     return document.write('Вы ввели неправильное действие.<br>')
//             }
//             return document.write(`${this.digit1} ${this.operation} ${this.digit2} = ${result}<br>`);
//         }
//     }
// }
// const sum = new Calculator(8,2);
// sum.start();
// sum.doCalculate();
// sum.finish();

// document.write('<br>Задание 2. Лампочка.<br>')
// const Lamp = function(power, electricityCost) {
//     this.power = power;
//     this.electricityCost = electricityCost;
//     this.inWork = false;
//     this.start = function() {
//         this.inWork = true;
//     }
//     this.finish = function() {
//         this.inWork = false;
//     }
//     this.workingHours = function(LampHourCounter) {
//         let cost = 0;
//         if (this.inWork === false){
//             document.write('Лампочка выключена.<br>');
//         } else {
//             cost = ((LampHourCounter * this.power)/ 100) * this.electricityCost;
//             return document.write(`Стоимость работы за ${LampHourCounter} часов равна ${cost} рублей.<br>`);
//         }
//     }
// }
// const coolLamp = new Lamp(100, 20)
// coolLamp.start();
// coolLamp.workingHours(5)

// document.write('<br>Задание 3. Чайник.<br>')
// const Kettle = function(power, kettleVolume, volumeOfWater) {
//     this.power = power;
//     this.kettleVolume = kettleVolume;
//     this.volumeOfWater = volumeOfWater;
//     this.inWork = false;
//     this.start = function() {
//         this.inWork = true;
//     }
//     this.finish = function() {
//         this.inWork = false;
//     }
//     this.kettleBoil = function(startingTemperature) {
//         boilTime = 0;
//         if (this.inWork === false){
//             document.write('Чайник выключен.<br>');
//         } else {
//             boilTime = (volumeOfWater*(100-startingTemperature)*0.007)/(kettleVolume*power);
//             return document.write(`Время закипания чайника при мощности ${this.power} кВт, общем объеме чайника ${this.kettleVolume} л и объеме воды в чайнике ${this.volumeOfWater} л равно ${Math.round(boilTime*60)} минут.<br>`);
//         }
//     }
// }
// const coolKettle = new Kettle(2.5, 2, 1)
// coolKettle.start();
// coolKettle.kettleBoil(25)

// document.write('<br>Задание 4. Машина.<br>')
// let distance = 0;
// const Car = function(model) {
//     this.model = model;
//     this.inWork = false;
//     this.gear = 0;
//     this.start = function() {
//         this.inWork = true;
//     }
//     this.finish = function() {
//         this.inWork = false;
//         return document.write(`${this.model} проехала  расстояние равное ${distance.toFixed(2)} км.<br>`);  
//     }
//     this.upShift = function(time, speed) {
//         if (this.inWork === false){
//             document.write('Машина не заведена.<br>');
//         } else {
//             this.gear++
//             distance += (time / 60) * speed;
//             // return document.write(`${this.model} на ${this.gear} передаче проехала вперед ${time} минут со скоростью ${speed} км/ч расстояние равное ${distance.toFixed(2)} км.<br>`);  
//         }
//     }
//     this.downShift = function(time, speed) {
//         if (this.inWork === false){
//             document.write('Машина не заведена.<br>');
//         } else {
//             this.gear--
//             distance += (time / 60) * speed;
//             // return document.write(`${this.model} на ${this.gear} передаче проехала вперед ${time} минут со скоростью ${speed} км/ч  расстояние равное ${distance.toFixed(2)} км.<br>`);  
//         }
//     }
//     this.reverseGear = function(time, speed){
//         if (this.gear > 0) {
//             document.write('Вы сломали коробку переключения перердач.<br>');
//         } else {
//             distance -= (time / 60) * speed;
//             // return document.write(`${this.model} проехала назад ${time} минут со скоростью ${speed} км/ч  расстояние равное ${distance.toFixed(2)} км.<br>`);        
//         }
//     }
// }
// const A6 = new Car('Ауди А6')
// A6.start();
// A6.reverseGear(5,40)
// A6.upShift(5, 10)
// A6.upShift(5, 20)
// A6.upShift(20, 20)
// A6.downShift(5, 20)
// A6.finish()

document.write('<br>Задание 5. Контакты.<br>')
let counter = 0;
let arrayContacts = [];
const Contact = function(fullName, age, phone, email) {
    this.addContact = function(){
        counter++
        this.fullName = fullName;
        this.age = age;
        this.phone = phone;
        this.email = email;
        arrayContacts.push(`<br>Контакт №${counter}.<br>Вас зовут ${this.fullName}.<br>Вам ${this.age} лет.<br>Ваш номер телефона: ${this.phone}.<br>Ваш адрес электронной почты: ${this.email}.<br>`)
    }
    this.checkContact = function() {
        if (this.age < 18) {
            alert(`Вам нет 18 лет.<br>`)
        }
        if (!/(^\+375|^80)( |)(\(|)(33|44|29)(\)|)( |)(\d{7}|\d{3}(-\d{2}){2})/g.test(this.phone)){
            alert('Вы ввели номер телефона в неправильном формате')
        }
        if (!/^[a-zA-Z][a-zA-Z0-9]+\@[\w\.\-]+\.\w{2,11}/g.test(this.email)){
            alert('Вы ввели адрес электронной почты в неправильном формате')
        }
    }
    this.showContact = function() {
        return document.write(`<br>Контакт №${counter}.<br>Вас зовут ${this.fullName}.<br>Вам ${this.age} лет.<br>Ваш номер телефона: ${this.phone}.<br>Ваш адрес электронной почты: ${this.email}.<br>`)
    }
    this.showAllContact = function() {
        document.write(arrayContacts.join(''))
    }
}

const jaMorant = new Contact('Ja Morant', 21, '+375 (29) 555-44-22', 'jaMorant@gmail.com')
jaMorant.addContact()
jaMorant.checkContact()
// jaMorant.showContact()
const johnKonchar = new Contact('John Konchar', 24, '+375 (29) 333-44-22', 'johnKonchar@gmail.com')
johnKonchar.addContact()
johnKonchar.checkContact()
// johnKonchar.showContact()
const all = new Contact()
all.showAllContact()
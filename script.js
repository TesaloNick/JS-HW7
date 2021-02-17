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

document.write('Задание 2. Лампочка.<br>')
const Lamp = function(power, electricityCost) {
    this.power = power;
    this.electricityCost = electricityCost;
    this.inWork = false;
    this.start = function() {
        this.inWork = true;
    }
    this.finish = function() {
        this.inWork = false;
    }
    this.workingHours = function(workingLampCounter) {
        let cost = 0;
        if (this.inWork === false){
            document.write('Лампочка выключена.<br>');
        } else {
            cost = ((workingLampCounter * this.power)/ 100) * this.electricityCost;
            return document.write(`Стоимость работы за ${workingLampCounter} часов равна ${cost} рублей.<br>`);
        }
    }
}
const coolLamp = new Lamp(100, 20)
coolLamp.start();
coolLamp.workingHours(5)



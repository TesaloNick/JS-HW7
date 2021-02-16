const Calculator = function (digit1, digit2) {
    this.digit1 = digit1;
    this.digit2 = digit2;
    this.inWork = false;
    this.operation = prompt('Введите математическое действие: +, -, /, *')
    this.start = function(){
        this.inWork = true;
    }
    this.finish = function(){
        this.inWork = false;
    }
    this.doCalculate = function(){
        let result = 0;
        if (this.inWork === false){
            return document.write('Калькулятор выключен')
        } else {
            switch (this.operation){
                case '+':
                    result = this.digit1 + this.digit2;
                break;
                case '-':
                    result = this.digit1 - this.digit2;
                    break;
                case '*':
                    result = this.digit1 * this.digit2;
                    break;
                case '/':
                    result = this.digit1 / this.digit2;
                    break;
                default:
                    return document.write('Вы ввели неправильное действие')
            }
            return document.write(result);
        }
    }
}

const sum = new Calculator(8,2);
sum.start();
sum.doCalculate();
sum.Finish();

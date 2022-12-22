alert('Ви потрапили до калькулятору джуна на JS\nдотримуйтесь інструкцій!!!');

const num1 = prompt("Введіть перше число:");
const num2 = prompt("Введіть друге число:");

const numUno = parseInt(num1);
const numDes = parseInt(num2);

const a = numUno + numDes;
const b = numUno - numDes;
const c = numUno * numDes;
const d = numUno / numDes;

alert('Користувач ввів ' + numUno + ` і ` + numDes + ` :\n` + `· ` + numUno + "+" + numDes + "=" + a + "\n" + `· ` + numUno + "-" + numDes + "=" + b + "\n" + `· ` + numUno + "*" + numDes + "=" + c + "\n" + `· ` + numUno + "/" + numDes + "=" + d );
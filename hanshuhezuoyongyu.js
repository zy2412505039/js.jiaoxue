
function sayHello() {
    console.log("你好三亚学院");
}
sayHello();

function introduce(name,age) {
    console.log(`我叫${name}，今年龄${age}`);
}
introduce('小王',18);
introduce('小王=adad',10008);

function add(num1,num2) {
    return num1 + num2; // 修正为加法
}
const sum = add(20,6);
console.log(sum, '+++++++++++++++++');

function greet(name="同学") {
    console.log(`你好${name}`); // 修正模板字符串语法
}
greet();
greet("小898989");

function showInfo(userName,city) {
    console.log(userName,city,'形参接受实参');
}
showInfo("小saas","上海");

function showInfo2(userName,city="上海") {
    console.log(userName,city,'形参接受实参');
}
showInfo2("小saas");

function showInfo3() {
    const message = "这是函数内部变量";
    console.log(message,'函数内部可以访问');
}
// showMessage(); // 注释掉未定义的函数调用，或改为 showInfo3()
showInfo3(); // 如果你想调用这个函数

const websiteName = "js 教程";
function showWebsiteName() {
    console.log(websiteName,'函数外部可以访问');
}
showWebsiteName();

if (true){
    let blocklet = "let 在代码块内有效"
    const blockConst = "const 在代码块内有效";
    console.log(blocklet,blockConst,'代码块内可以访问');
}

console.log("函数重点：声明,调用,参数,返回值,默认参数");
console.log("作用域重点：函数作用域,全局作用域,块级作用域");
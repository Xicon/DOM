const getRandomNumber = document.getElementById('getRandomNumber') // input
    , getSubmit = document.getElementById('getSubmit') // button
    , answer = document.getElementById('answer') // code

    , getRandom = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) //取值范围为整数
}
    , setRandom = getRandom(1, 10) //取值范围

    , clearContent = () => getRandomNumber.value = '' //每次输入完成之后清空input的内容
// pc点击
getSubmit.addEventListener('click', judge, false)
// mobile点击
getSubmit.addEventListener('touchstart', judge, false)
//检测用户输入之后变化
getRandomNumber.addEventListener('input', ()=>{
    getSubmit.style.backgroundColor = 'yellow';
}, false)

// 检查输入结果
function judge() {
    //输入内容之后才可进入下次循环
    if (getRandomNumber.value !== '') {
        if (getRandomNumber.value > setRandom) {
            answer.innerHTML = '<ins><strong>你猜大了</strong></ins>'
            answer.className = 'error'
            clearContent()
        } else if (getRandomNumber.value < setRandom) {
            answer.innerHTML = '<ins><strong>你猜小了</strong></ins>'
            answer.className = 'error'
            clearContent()
        } else {
            answer.innerHTML = '<ins><strong>恭喜你 你猜对了!</strong></ins>'
            answer.className = 'correct'
            clearContent()
        }
    } else {
        answer.innerHTML = '<ins><strong>请在输入框输入数字!</strong></ins>'
        console.warn('请在输入框输入数字!')
        answer.className = 'warn'
    }
}


// // 绝对值
// console.log(Math.abs(-1)); //1
// console.log(Math.abs(1)); //1
// console.log(Math.abs('1')); //1
//
// // 向下取整 floor 地板
// console.log(Math.floor(1.1)); // 1
// console.log(Math.floor(1.9)); //1
//
// // 向上取整 ceil 天花板
// console.log(Math.ceil(1.2)); //2
// console.log(Math.ceil(2.9)); //3
//
// // 四舍五入  遇到负数时，往大取值 -1 > -2 所以-1.5的round结果为-1
// console.log(Math.round(1.4)); // 1
// console.log(Math.round(1.5)); // 2
// console.log(Math.round(-1.4)); // -1
// console.log(Math.round(-1.5)); // -1
// console.log(Math.round(-1.6)); // -2
//
// // 随机数 Math.random()方法 此方法不包含参数，默认返回一串小于1的浮点数
// console.log(Math.random());
//
// // 案例1： 封装一个随机数函数，该函数返回一个包含最小值和不包含最大值的随机浮点数
// function getRandom(min, max) {
//     return `getRandom： ${Math.random() * (max - min) + min}`; //含最小值，不含最大值
// }
//
// console.log(getRandom(1, 10));
//
// // 案例2 : 获取随机整数。封装一个随机数函数，该函数返回一个包含最小值和最大值的随机整数
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return `getRandomIntInclusive： ${Math.floor(Math.random() * (max - min + 1) + min)}`; // 包含最大值和最小值
// }
//
// console.log(getRandomIntInclusive(1, 10));
//
// // 案例3 场景：班级随机点名
// // 核心方法 数组名[随机数方法函数(开始值，结束值)]
// const ClassNameArray = ['张三', '李四', '王五', '老刘', '张思'];
//
// function getRandomClassName(min, max) {
//     return `${Math.floor(Math.random() * (max - min + 1) + min)}`;
// }
//
// console.log(ClassNameArray[getRandomClassName(0, ClassNameArray.length - 1)]); //利用数组索引从0开始特性来定义随机数的范围。
//
// // 案例4： 利用随机数随机打出1-10的随机整数
// function getRandomIntInclusive1(min, max) {
//     for (let i = 0; i < 10; i++) {
//         console.log(Math.floor(Math.random() * (max - min + 1) + min));
//     }
// }
//
// getRandomIntInclusive1(0, 10);
//
//
// // 符合密码学的Crypto.getRandomValues(typedArray)方法
// // typedArray参数：一个基于整数的TypedArray(类型化数组)。
// // + Int8Array() 二进制补码8位有符号整数的数组
// // + Int16Array() 平台字节顺序中由 16 位符号 16 位签名整数的数组
// // + Int32Array() 二进制8位无符号整数的数组
//
// // + Uint8Array() 二进制8位无符号整数的数组
// // + Uint16Array() 16位无符号整数，按平台字节顺序排列
// // + Uint32Array() 32位无符号整数，按平台字节顺序排列
//
// const array = new Uint8Array(8);
// window.crypto.getRandomValues(array);
// console.log('Your lucky numbers:');
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

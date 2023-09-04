// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let calc = (a,b) => a*b;
//     console.log(calc(2,10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let calc = (r,p=3.14) => r*r*p;
//  console.log(calc(5));
// //
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let calc = (r,h,p=3.14) => 2*p*r*(h+r);
//  console.log(calc(10,6));

// - створити функцію яка приймає масив та виводить кожен його

// let usersList =(users) => {
// for (const user of (users)) {
//     console.log(user)
// }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// usersList (users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let parag = (arguments) => {
//     document.write(`<h1>${arguments}</h1>`)
// }
// parag('Natalia');
//
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//
// let listOfSmth = (a) => {
//     document.write(`<div>
//         <ul>
//             <li> ${a} </li>
//             <li> ${a} </li>
//             <li> ${a} </li>
//         </ul>
//     </div>`)
// }
// listOfSmth('Parrot')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let foobar = (text,counter) => {
//         document.write(`<ul>`);
//     for (let x=0; x < counter; x++) {
//         document.write(`<li> ${text} </li>`);
//     }
//     document.write (`</ul>`);
//                }
// foobar('Natalka',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let newOne = (list) => {
//    document.write(`<ul>`);
//     for (let item of list) {
//      document.write(`<li> ${item} </li>`);
//    }
//   document.write (`</ul>`);
//          }
//   newOne([123, 'name', 'bye', false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


//
// const foo1 = (array) => {
//
//    for (let item of array) {
//        document.write(`<div>
//            <h5> ${item.name} </h5>
//            <h5> ${item.age} </h5>
//            <h5> ${item.status} </h5>
//
//                       </div>`) ;
//    }
// }
//  foo1(users)
// //

// - створити функцію яка повертає найменше число з масиву
//
// const smllst = (arr2) => {
//     let result2=arr2[0];
//     for (let f=0; f < arr2.length; f++) {
//            if (arr2[f]<result2) {
//                result2=arr2[f]
//            }
//     }
//     return result2;
// }
// console.log(smllst([2,14,16,-1,24,0,88]))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
// const sum3 = (arr3) => {
//      let result3=0;
//      for (let g=0; g < arr3.length; g++) {
//             result3=arr3[g]+result3;
//            }
//      return result3;
// }
// console.log(sum3([10,10,20,20,40]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=>
//
// let swap = (arr,index1,index2) => {
//     let index11= arr[index1];
//     arr[index1]=arr[index2];
//     arr[index2]=index11;
//
//
// return arr;
// }
// console.log (swap([16,14,12], 0,2));


// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // =>


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const val of currencyValues)
        if (val.currencyValues === exchangeCurrency) {
            return sumUAH/val.value
        }
}
let result5=exchange(10000,[{currencyValues:'USD',value:40},{currencyValues:'EUR',value:42}],'USD')
console.log(result5)
// // Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// // При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// // Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// //
// //
// let form = document.forms[0]
// form.onsubmit=function (ev) {
//     ev.preventDefault()
//     let div = document.createElement('div')
//     document.body.append(div)
//     div.append( `Name: ${form.Name.value}`, ' ,   ',`Last name: ${form.surname.value},`,   `Age : ${form.age.value}`)
//     form.reset()
//    }
//
// //
// // є сторінка, на якій є блок, я кому знаходиьтся цифра.
// // написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let div1 = document.createElement('div1');
// document.body.append(div1)
// let number = div1.textContent;
// window.addEventListener('load', function (ev) {
//     let localNum = localStorage.getItem('number');
//     number = +localNum + 1;
//     div1.textContent = number;
//     localStorage.setItem('number', number.toString());
// })
// //
// //
// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// // про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// // при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// // Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// //
// window.addEventListener('load', function (ev) {
//     let data = new Date();
//     localStorage.setItem(`session ${number}`, JSON.stringify(data));
// })
//
// //
// // зробити масив на 100 об'єктів та дві кнопки prev next
// // при завантажені сторінки з'являються перші 10 об'єктів.
// //     При натисканні next виводяться настпні 10 об'єктів
// // При натисканні prev виводяться попередні 10 об'єктів
// //
//
// let array = []
//
// for (let i = 1; i <= 100; i++) {
//     array.push(i)
// }
//
// let count = 0;
// let div = document.getElementById('div2');
// let previous = document.getElementById('previous');
// let next = document.getElementById('next');
// div.innerText = (array.slice(count, count + 10));
//
// next.addEventListener('click', function (ev)  {
//     ev.preventDefault()
//     count += 10
//     let d = div.innerText = array.slice(count, count + 10)
//     previous.style.display = 'inline-block'
//
//     if (d.includes(100)) {
//         next.style.display = 'none'
//         previous.style.display = 'show'
//     }})
//
//
// previous.addEventListener('click', (ev) => {
//     ev.preventDefault()
//     next.style.display = 'inline-block'
//     count -= 10
//     let d = div.innerText = array.slice(count-10, count)
//
//     if(d.includes(10)) {
//         previous.style.display = 'none'
//         next.style.display = 'inline-block'
//     }})
//
//
// // - Створити довільний елемент з id = text та створити кнопку.
// // Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let p = document.getElementById('text');
// let del= document.getElementById('delete');
//
// del.addEventListener('click', function () {
//     p.remove();
// })
//
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// //
// let chk = document.getElementsByClassName('button')[0];
// chk.addEventListener('click', function () {
//     let agechk = document.getElementsByName('agecheck')[0];
//     agechk.value < 18 ? alert('you are under 18') :
//     agechk.value = '';
// })


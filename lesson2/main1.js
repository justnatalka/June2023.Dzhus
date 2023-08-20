let colours = ["blue", "yellow", "green", "black", "white", "violet", "orange", "grey", "brown", "pink"];
console.log(colours);



let books = [{ id: 1, title: 'Harry Potter', pageCount: 650, genre: 'fantasy',},
                                      { id: 2, title: 'Kobzar', pageCount: 220, genre: 'poems',},
                                      { id: 3, title: 'I, Victory and Berlin', pageCount: 280, genre: 'novel'}
                                      ];

let booksAuthors = [{ id: 5, title: 'Harry Potter', pageCount: 650, genre: 'fantasy', author:
                                                                                                               [ {
                                                                                                   name: 'J.K.Rowling',
                                                                                                   age: 55,}],
},
                                             { id: 6, title: 'Kobzar', pageCount: 220, genre: 'poems',author:
                                                                                                  [ {
                                                                                                 name: 'T.H.Shevchenko',
                                                                                                 age: 42,}],},
                                             { id: 7, title: 'I, Victory and Berlin', pageCount: 280, genre: 'novel',  author:
                                                                                                  [ {
                                                                                                 name: 'A.Kuzmenko',
                                                                                                 age: 55,}],}
];


let users =[
    ['Nata', 'Olivia', 'Emma', 'Charlotte', ' Amelia',  'Sophia', ' Isabella', 'Ava', 'Mia', 'Evelyn'],
    ['Nata123', 'Olivia123', 'Emma123', 'Charlotte123', ' Amelia123',  'Sophia123', ' Isabella123', 'Ava123', 'Mia123', 'Evelyn123'],
    [ 'password', '123456', '123456789', 'guest', 'qwerty', '12345678', '111111', '12345', 'col123456', '123123'],
];
console.log(users[2]);


let x = -3;
if (x !== 0) {
console.log(true)}
else
console.log(false);


/*let min = +prompt ('enter number from 0 to 59');
if (min<=15) {
    console.log ('first');
    }
else if (min>=16, min<=30) {
    console.log ('second');
}
else if (min>=31, min<=45) {
    console.log ('third');}

else if (min<=46, min<60) {
    console.log ('fourth');
}
else {
    console.log ('tf? enter number from 0 to 59');
}*/



/*let day = +prompt ('enter day of the month');
if (day<=10) {
    console.log ('first');
}
else if (day>=11, day<=20) {
    console.log ('second');
}
else if (day>=31, day<=31) {
    console.log ('third');}
else {
    console.log ('emmm, wrong number');
} */


/*let dayOfWeek = +prompt('Enter number of a day');
switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tueday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default :
        console.log ('wrong number,dude');
}*/

/*let num11 = 5;
let num12 = 5;
if (num11>num12) {
    console.log (num11);
}
else if (num11<num12) {
    console.log(num12);
}
else {
    console.log('they are equal')
} */

/*let y = prompt('your message') || 'default';
console.log(y);*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
    ];

if (coursesAndDurationArray[0].monthDuration>5) {
    console.log('Super!')
}
if (coursesAndDurationArray[1].monthDuration>5) {
    console.log('Super!')
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('Super!')
}if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('Super!')
}if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('Super!')
}
if (coursesAndDurationArray[5].monthDuration>5) {
    console.log('Super!')
}


// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id,name,surname,email,phone) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
//
// let users1 = [];
// users1[0] = new User(1, 'Natalka', 'Dzhus', 'nata@gmail.com', 7373732)
// users1[1] = new User(2,  'Roman', 'Dzhus', 'roma@gmail.com', 785555)
// users1[2] = new User(3, 'Mama', 'Ira', 'Ira@gmail.com', 65965252)
// users1[3] = new User(4, 'Oksana', 'Lys', 'lys@gmail.com', 596565854)
// users1[4] = new User(5, "Tanya", 'Fedkovych', 'tata@gmail.com', 5955454552)
// users1[5] = new User(6, "Did", 'Ignat', 'did@gmail.com', 5955152252)
// users1[6] = new User(7, "Florence", 'Anna', 'anna@gmail.com', 985215252)
// users1[7] = new User(8, "Chris", 'Parker', 'chris@gmail.com', 98454551)
// users1[8] = new User(9, "Musya", 'Cat', 'cat@gmail.com', 9856552252)
// users1[9] = new User(10, "Stepan", 'Dzhus', 'stephan@gmail.com', 99544852)
//
//
//
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(users1.filter(value => value.id % 2 === 0));
//
//
//
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users1.sort((a, b) => a.id - b.id));
//
//
//
// //
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// function Client (id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let clients1 = [];
// clients1[0] = new Client(1, 'Natalka', 'Dzhus', 'nata@gmail.com', 7373732, ['butter','bread','coffee'])
// clients1[1] = new Client(2,  'Roman', 'Dzhus', 'roma@gmail.com', 785555,['butter','bread','coffee','apples'])
// clients1[2] = new Client(3, 'Mama', 'Ira', 'Ira@gmail.com', 65965252, ['butter','coffee'])
// clients1[3] = new Client(4, 'Oksana', 'Lys', 'lys@gmail.com', 596565854, ['whiskey','bread','coffee'])
// clients1[4] = new Client(5, "Tanya", 'Fedkovych', 'tata@gmail.com', 5955454552,['bread','sugar'])
// clients1[5] = new Client(6, "Did", 'Ignat', 'did@gmail.com', 5955152252,['samohon','beer','biscuit'])
// clients1[6] = new Client(7, "Florence", 'Anna', 'anna@gmail.com', 985215252,['fish','bread','oranges'])
// clients1[7] = new Client(8, "Chris", 'Parker', 'chris@gmail.com', 98454551,['kokos','ananas','melon'])
// clients1[8] = new Client(9, "Musya", 'Cat', 'cat@gmail.com', 9856552252,['salt','sugar','chocolate'])
// clients1[9] = new Client(10, "Stepan", 'Dzhus', 'stephan@gmail.com', 99544852,['sweets','icecream'])
//
//
//
//
//
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clients1.sort((a, b) => a.order.length - b.order.length));
//
//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Cars (model, producer, yearOfCar, maximumSpeed, engineCap) {
//     this.model = model;
//     this.producer = producer;
//     this.yearOfCar = yearOfCar;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCap = engineCap;
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(`'модель - ${model}', 'виробник - ${producer}', 'рік випуску - ${yearOfCar}', 'максимальна швидкість - ${maximumSpeed}, 'обєм двигуна - ${engineCap}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maximumSpeed += newSpeed;
//     }
//     this.changeYear = function  (newValue) {
//         this.yearOfCar = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.drive = driver;
//     }
// }
// let car = new Cars('Ford', 'UnitedStates', 2006, 160, 120);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// console.log(car);
// car.changeYear(2021);
// console.log(car);
// car.addDriver({name: 'Florence', lastname: 'Koshibaki', age: 21, driverLisense: true});
// console.log(car);
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //


class Cars2 {
    constructor (model, producer, yearOfCar, maximumSpeed, engineCap) {

        this.model = model;
        this.producer = producer;
        this.yearOfCar = yearOfCar;
        this.maximumSpeed = maximumSpeed;
        this.engineCap = engineCap;

    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }
    info () {
        console.log(`'модель - ${this.model}', 'виробник - ${this.producer}', 'рік випуску - ${this.yearOfCar}', 'максимальна швидкість - ${this.maximumSpeed}, 'обєм двигуна - ${this.engineCap}'`)
    }

    increaseMaxSpeed (newSpeed) {
        this.maximumSpeed += newSpeed;
    }
    changeYear (newValue) {
        this.yearOfCar = newValue;
    }
    addDriver (driver)
    {
        this.drive = driver;
    }
}


let car2 = new Cars2('Ford', 'UnitedStates', 2006, 160, 120);
car2.drive();
car2.info();
car2.increaseMaxSpeed(20);
console.log(car2);
car2.changeYear(2022);
console.log(car2);
car2.addDriver({name: 'Florence', lastname: 'Koshibaki', age: 21, driverLisense: true});
console.log(car2);



//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cindirella (name, age, shoeSize) {
    this.name=name;
    this.age=age;
    this.shoeSize=shoeSize;
}

let Cinderelas = []
Cinderelas[0] = new Cindirella('Nata', 33, 42);
Cinderelas[1] = new Cindirella('Maya', 31, 36);
Cinderelas[2] = new Cindirella('Ira', 28, 37);
Cinderelas[3] = new Cindirella('Tanya', 23, 38);
Cinderelas[4] = new Cindirella('Olya', 19, 40);
Cinderelas[5] = new Cindirella('Anya', 24, 41);
Cinderelas[6] = new Cindirella('Hrystya', 38, 39);
Cinderelas[7] = new Cindirella('Marta', 22, 38);
Cinderelas[8] = new Cindirella('Olenka', 27, 36);
Cinderelas[9] = new Cindirella('Florence', 18, 35);


class Prince {
    constructor(name, age, foundShoeSize) {
        this.name=name;
        this.age=age;
        this.foundShoeSize=foundShoeSize;
    }
}
let PrinceCharming = new Prince('Ivan', 20, 35);

// console.log(Cinderelas.filter(value => value.shoeSize === PrinceCharming.foundShoeSize));


// console.log(Cinderelas.find(value => value.shoeSize === PrinceCharming.foundShoeSize));

let whoIsShe = (name);
for (let i=0; i < Cinderelas.length; i++)
     if (Cinderelas[i].shoeSize === PrinceCharming.foundShoeSize) {
         console.log(Cinderelas[i].name)
     }
console.log(whoIsShe);
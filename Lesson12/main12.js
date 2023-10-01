// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде
// вся інформація про користувача (всі 15 полів) отримана через
// додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(allUsers => {
        const userList = document.getElementById('user-list');
        allUsers.forEach(user => {
            const liItem = document.createElement('li');
            const ref = document.createElement('a');
            ref.textContent = `${user.id} - ${user.name}`;
            ref.href = `userDetails.html?id=${user.id}`;
            liItem.appendChild(ref);
            userList.appendChild(liItem);
        });
    });
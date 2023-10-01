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
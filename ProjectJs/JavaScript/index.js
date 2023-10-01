fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let main = document.getElementById('main')
        let container = document.createElement('div')
        container.className = 'container'
        for (const i of value) {
            let div = document.createElement('div')
            div.className = 'box'
            div.innerHTML = `<div class = 'title'>
            <h3>ID:${i.id}</h3>
        <h2> ${i.name}</h2>
        <a class='btn' href = 'user-details.html?id=${i.id}'>More info</a>
        </div>`
            container.appendChild(div)
        }
        main.appendChild(container)
    })

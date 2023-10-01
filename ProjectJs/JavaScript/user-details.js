let url = new URL(window.location.href).searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/users/${url}`)
    .then(value => value.json())
    .then(value => {
        let main = document.getElementById('main')
        let wrapper = document.createElement('div')
        wrapper.className = 'wrapper'
        let div = document.createElement('div')
        div.className = 'cart'
        div.innerHTML = `<div class="info">
        <h3>ID: ${value.id}</h3>
        <h2>Name: ${value.name}</h2>
        <h3>Email: ${value.email}</h3>
        <h3>Phone: ${value.phone}</h3>
        <h3>Website: ${value.website}</h3>
        </div>
        <div class="address">
        <h3>Address:</h3>
        <h3>Street: ${value.address.street}</h3>
        <h3>Suite: ${value.address.suite}</h3>
        <h3>Zip: ${value.address.zipcode}</h3>
        <h3>City: ${value.address.city}</h3>
        <h3>Geo: lat: ${value.address.geo.lat} lng: ${value.address.geo.lng}</h3>
        </div>
        <div class="company">
        <h3>Company: </h3>
        <h3>Name: ${value.company.name}</h3>
        <h3>Catch Phrase: ${value.company.catchPhrase}</h3>
        <h3>Bs: ${value.company.bs}</h3>
        </div>
        <button onclick="currentUser(${value.id})" class="infoBtn">Posts</button>`
        let post = document.createElement('div')
        post.className = 'postPlace'
        post.id = 'post'
        wrapper.appendChild(div)
        wrapper.appendChild(post)
        main.appendChild(wrapper)
    })
const currentUser = id => {
    let post = document.getElementById('post')
    if (post.style.display === 'none' || post.style.display === '') {
        post.style.display = 'grid'
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => {
                post.innerHTML = ''
                for (const i of value) {
                    let div = document.createElement('div')
                    div.className = 'box'
                    div.innerHTML = `<div class="title"><h2>Title Post </h2><h3> ${i.title}</h3></div>
                <div class = 'linkBtn'><a class="btn" href="post-details.html?id=${i.id}">More Info</a></div>
                `
                    post.appendChild(div)
                }
            })
    } else {
        post.style.display = 'none'
    }
}

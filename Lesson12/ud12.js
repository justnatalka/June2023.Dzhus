let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(value => {
            let ul =document.createElement('ul');
            ul.innerHTML = `
                 <h3>Personal info:</h3>
            <li>Id - ${value['id']}</li>
            <li>Name - ${value['name']}</li>
            <li>Username - ${value['username']}</li>
            <li>Email - ${value['email']}</li>
            <li>Website - ${value['website']}</li>
            <li>Phone number - ${value['phone']}</li>
            <h3>Address:</h3>
                <li>City - ${value['address']['city']}</li>
                <li>Street - ${value['address']['street']}</li>
                <li>Suite - ${value['address']['suite']}</li>
                <li>Zipcode - ${value['address']['zipcode']}</li>
                  <h3>Geo:</h3>
                    <li>Lat - ${value['address']['geo']['lat']}</li>
                    <li>Lng - ${value['address']['geo']['lng']}</li>
            
      
                    <h3>Company:</h3>
                <li>Name - ${value['company']['name']}</li>
                <li>Catch phrase - ${value['company']['catchPhrase']}</li>
                <li>Bs - ${value['company']['bs']}</li>
            
            
                   
                  
              
           
        `
            console.log(value);
            document.body.appendChild(ul);
    })
const managerData =() => {
    fetch('http://www.mocky.io/v2/5d73bf3d3300003733081869')
    .then(res => {
        return res.json();
    })
    .then(data => {
        /* Template - Profile Card & Info */
        data.forEach(id => {
            let profile_card = document.querySelector(".profile-card");
            // Create a Card
            let col = document.createElement('div');
            col.classList = 'col-lg-6 pb-4';
    
            const card = `
                <div class="card py-4 d-flex justify-content-center align-items-center h-100">             
                <div class="card-body d-lg-flex">
                    <div class="profile-img">
                        <img src="assets/img/userphoto.png">
                    </div>
                    <div class="profile-info">
                        <h5 class="profile-name">${id.name}</h5>
                        <li>Username: <span class="user">${id.username}</span></li>
                        <li>Email: <span class="email">${id.email}</span></li>
                        <li>Age: <span class="age">${id.age}</span></li>
                        <li>Address: <span class="address">${id.address.city} 
                        ${id.address.street} ${id.address.suite} ${id.address.zipcode}</span></li>
                        <li>Phone: <span class="phone">${id.phone}</span></li>
                        <li>Website: <span class="website">${id.website}</span></li>
                        <li>Company: <span class="company">${id.company}</span></li>
                    </div>
                </div>
            </div>
            `;
            col.innerHTML += card;
            profile_card.appendChild(col);
        })
    })
    .catch(error => console.log(error));
};

managerData();
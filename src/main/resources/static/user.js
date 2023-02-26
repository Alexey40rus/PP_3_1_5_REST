let userInfo = document.querySelector('#userInfo')
let URL = 'http://localhost:8080/api/user'
fetch(URL)
    .then(res => res.json())
    .then(user => {
        userInfo.innerHTML = `
                                <span class="font-weight-bold">${user.email}</span>
                                with roles:
                                ${user.roles.map(r => ' ' + r.name.replaceAll('ROLE_', ' '))}
                                 `;
    })

// ----- Информация о пользователе -----

function showUserPage() {
    let userTable = document.querySelector('#userTable')
    fetch(URL)
        .then(res => res.json())
        .then(user => {
            userTable.innerHTML = `
                                <td>${user.id}</td>
                                <td>${user.username}</td>
                                <td>${user.email}</td>                                
                                <td> ${user.roles.map(r => ' ' + r.name.replaceAll('ROLE_', ' '))}</td>
                                 `
        })
}
showUserPage();
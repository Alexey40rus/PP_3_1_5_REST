let userInfo = document.querySelector('#adminInfo')
fetch('http://localhost:8070/api/user')
    .then(res => res.json())
    .then(user => {
        userInfo.innerHTML = `
                                <span class="font-weight-bold">${user.email}</span>
                                with roles:
                                ${user.roles.map(r => ' ' + r.name.replaceAll('ROLE_', ' '))}
                                 `;
    });

// ----- Информация о пользователе -----

function showUserPage() {
    let userTable = document.querySelector('#userTable')
    fetch('http://localhost:8070/api/user')
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


//------ Таблица users -----

function refreshTableUsers() {
    fetch('http://localhost:8080/api/admin')
        .then(response => response.json())
        .then(result => refreshTable(result));
}

function refreshTable(users) {
    let tBody = '';
    $.each(users, function (key, object) {
        let roles = '';
        $.each(object.roles, function (k, o) {
            roles += o.name + ' ';
        });
        tBody += '<tr>';
        tBody += '<td>' + object.id + '</td>';
        tBody += '<td>' + object.username + '</td>';
        tBody += '<td>' + object.email + '</td>';
        tBody += '<td>' + roles.replaceAll('ROLE_', ' ') + '</td>';
        tBody += '<td><button type="button" onclick="editModal(' + object.id + ')" ' +
            'class="btn btn-primary">Edit</button></td>';
        tBody += '<td><button type="button" onclick="deleteModal(' + object.id + ')" ' +
            'class="btn btn-danger">Delete</button></td>';
        tBody += '</tr>';
    });
    $('#usersTable').html(tBody);
}

refreshTableUsers();


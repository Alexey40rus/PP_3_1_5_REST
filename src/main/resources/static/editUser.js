// ----- Редактирование пользователя -----

function editUser(id) {
    fetch('http://localhost:8080/api/admin/' + id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(
            {
                id: document.getElementById('idEdit').value,
                username: document.getElementById('usernameEdit').value,
                email: document.getElementById("emailEdit").value,
                password: document.getElementById('passwordEdit').value,
                roles: [
                    document.getElementById('roleEdit').value
                ]
            })
    }).then(() => {
        $('#editModal').modal();
        refreshTableUsers();
    })
}


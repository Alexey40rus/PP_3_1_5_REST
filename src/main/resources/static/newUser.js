//----- Новый пользователь -----

function addNewUser() {

    fetch('http://localhost:8080/api/admin', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',

        body: JSON.stringify({
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            roles: [
                document.getElementById('role').value
            ]
        })
    }).then(() => {
        $('form input[type="text"], form input[type="password"], form input[type="number"], form textarea')
            .val('');
        refreshTableUsers();
    });

}
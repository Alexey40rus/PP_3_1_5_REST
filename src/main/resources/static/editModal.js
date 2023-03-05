// ----- Модальное окно редактирования  -----

function editModal(id) {

    fetch('http://localhost:8080/api/admin/' + id)
        .then(response => response.json())
        .then(result => writeFields(result))

    function writeFields(user) {
        $('#idEdit').val(user.id);
        $('#usernameEdit').val(user.username);
        $('#emailEdit').val(user.email);
        $('#passwordEdit').val(user.password);
        $('#roleEdit').val(user.role);
        $('#edit').attr('onclick', 'editUser(' + user.id + ')')
        $('#editModal').modal()
    }
}
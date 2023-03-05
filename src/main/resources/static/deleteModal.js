// ----- Модальное окно удаления  -----

function deleteModal(id) {

    fetch('http://localhost:8080/api/admin/' + id)
        .then(response => response.json())
        .then(result => writeFields(result))

    function writeFields(user) {
        $('#idDel').val(user.id);
        $('#usernameDel').val(user.username);
        $('#emailDel').val(user.email);
        $('#roleDel').val(user.role);
        $('#delete').attr('onclick', 'deleteUser(' + user.id + ')')
        $('#deleteModal').modal('show'); // добавлен вызов метода 'show'
    }
}
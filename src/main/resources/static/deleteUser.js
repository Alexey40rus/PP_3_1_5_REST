// ----- Удаление пользователя -----

function deleteUser(id) {
    fetch('http://localhost:8080/api/admin/' + id, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log('Item delete');
                const trDelete = document.querySelector(`#tr-${id}`);
                trDelete.remove();
                refreshTableUsers();
            } else {
                throw new Error('Ошибка удаления элемента');
            }
        })
        .catch(error => console.error(error))
        .finally(() => {
            // выполните необходимые действия после удаления элемента
        });
}
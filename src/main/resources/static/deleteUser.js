// ----- �������� ������������ -----

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
                throw new Error('������ �������� ��������');
            }
        })
        .catch(error => console.error(error))
        .finally(() => {
            // ��������� ����������� �������� ����� �������� ��������
        });
}
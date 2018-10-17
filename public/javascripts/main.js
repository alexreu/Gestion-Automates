$(function () {

    $.get('/automate/selectType', function (data) {
        $('#selectType').append(data);
    });

    $.get('/automate/selectMarque', function (data) {
        $('#selectMarque').append(data);
    });

    $('#editModal').on('show.bs.modal', function (e) {
        let button = $(e.relatedTarget);
        let extractData = {
            nom: button.data('nom'),
            serial: button.data('serial'),
            configuration: button.data('configuration'),
            id: button.data('id')
        };

        let modal = $(this);
        modal.find('#nom').val(extractData.nom);
        modal.find('#serial').val(extractData.serial);
        modal.find('#configuration').val(extractData.configuration);
        modal.find('#id').val(extractData.id);
    })

});
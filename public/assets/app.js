$(document).ready(function () {
    $('#addBurger').on('submit', function(e) {
        e.preventDefault();

        var burger = {
            burgers: $('#addBurger [name=burger]').val().trim()
        };
        
        $.ajax('/burgers',{
            type: 'POST',
            data: burger
        }).then(
            function () {location.reload}
        );
    })

    $('eatBurger').on('click', function () {
        var id = $(this).data('burgerID')

        $.ajax(`/burgers/${id}`, {
            type: 'PUT'
        }).then(
            function () {location.reload}
        )
    })
})
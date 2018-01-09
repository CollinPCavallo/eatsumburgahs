$(document).ready(function () {
    $('#addBurger').on('submit', function(e) {
        e.preventDefault();

        var burger = {
            burgers: $('#addBurger [name=burger]').val().trim()
        };
        
        $.ajax({
            type: 'POST',
            url: "/burgers",
            data: burgers
        }).then(
            function () {location.reload}
        );
    })

    $('#eatBurger').on('click', function () {
        var id = $(this).data('burgerID')

        $.ajax( {
            type: 'PUT',
            url:'/burgers/' + id,
            data: {
                devoured: true
            }
        }).then(
            function () {location.reload}
        )
    })
})
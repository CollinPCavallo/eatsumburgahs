$(document).ready(function () {
    $('#addBurger').on('submit', function(e) {
        e.preventDefault();

        var burger = {
            burgers: $('#addBurger [name=burger]').val().trim()
        };
        
        $.ajax({
            type: 'POST',
            url: "/burgers",
            data: burger
        }).then(
            function () {location.reload()}
        );
    })

    $('#eatBurger').on('click', function () {
        var id = $(this).data('burgerid')

        $.ajax( {
            type: 'PUT',
            url:'/burgers/' + id,
            data: {
                devoured: true
            }
        }).then(
            function () {location.reload()}
        )
    })
})
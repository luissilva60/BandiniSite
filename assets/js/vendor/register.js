$(document).ready(function () {
    $('#btnRegister').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnRegister").prop("disabled", true);
        $.ajax({
            url: "",
            type: "POST",
            data: {
                name: jQuery('[name=user_name]').val(),
                email: jQuery('[name=user_email]').val(),
                password: jQuery('[name=user_password]').val()
            },
            dataType: 'json',
            success: function(result) {
                console.log("SUCCESS : ", result);
                $("#btnRegister").prop("disabled", false);
                window.location.href = ""
            }
        });
    });
});
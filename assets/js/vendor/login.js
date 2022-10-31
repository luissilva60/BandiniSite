$(document).ready(function() {





    $('#btnLogin').on('submit', function (event){

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnLogin").prop("disabled", true);

        $.ajax({
            url: "",
            type: "POST",
            data: {
                email: jQuery('[name=email]').val(),
                password: jQuery('[name=password]').val()
            },

            dataType: 'json',

            error: function (result){
                alert("Nome ou password incorretas")
                console.log("ERROR: ", result)

                $("#btnLogin").prop("disabled", false);
            },
            success: function(result) {
                console.log("SUCCESS : ", result);
                window.location.href = ""



                window.localStorage.setItem('user', JSON.stringify(result));
                $("#btnLogin").prop("disabled", false);
            }

        });

    });




    $('#btnLogin').on('click', function(event) {

        // prevent form default behaviour
        event.preventDefault();

        // disabled the submit button
        $("#btnLogin").prop("disabled", true);

        $.ajax({
            url: "",
            type: "POST",
            data: {
                email: jQuery('[name=email]').val(),
                password: jQuery('[name=password]').val()
            },

            dataType: 'json',

            error: function (result){
                alert("Nome ou password incorretas")
                console.log("ERROR: ", result)

                $("#btnLogin").prop("disabled", false);
            },
            success: function(result) {
                console.log("SUCCESS : ", result);
                window.location.href = ""



                window.localStorage.setItem('user', JSON.stringify(result));
                $("#btnLogin").prop("disabled", false);
            }

        });

    });



});
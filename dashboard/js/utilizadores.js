$(document).ready(

    function(){
        var user = JSON.parse(window.localStorage.getItem('user'));
        var username = document.getElementById("usernameDB");
        username.textContent = user.user_name;
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://bandini.fly.dev/api/users",
            type: "GET",
            dataType: 'json',
            success: function(result) {
                console.log(result);
                $('#name').text(result)
                var obj = JSON.stringify(result);
                console.log(obj);
                let tabela = document.querySelector("#tableuser")
                let html = ""
                let buttons = 
                "<td><div class='btn-group'>" +
                "<button type='button' class='btn btn-danger'>Apagar</button>" +
                "</div>" +
                "<div class='btn-group'>" +
                "<button type='button' class='btn btn-warning'>Role Down</button>" +
                "</div>" +
                "<div class='btn-group'>" +
                "<button type='button' class='btn btn-success'>Role Up</button>" +
                "</div>" +
                "<div class='btn-group'>" ;
                for (let i in result)
                {
                    html += `<tr>
                    <th>${result[i].user_id}</th>
                    <th>${result[i].user_name}</th>
                    <th>${result[i].user_bdate}</th>
                    <th>${result[i].user_email}</th>
                    <th>${result[i].user_role_id}</th>
                    ${buttons}</tr>`
                }

                tabela.innerHTML = html
            }

        });
    }

);
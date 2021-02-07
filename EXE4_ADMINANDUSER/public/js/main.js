console.log(1);
$(document).ready(function() {
    $("#btnSubmit").click(function() {
        let Username = $("#UserName").val();
        let password = $("#password").val();
        console.log(Username);
        console.log(password);
        let data = {
            Username: Username,
            Password: password,
        };
        console.log(data)
        $.ajax({
            data: data,
            url: 'User/getUser',
            method: 'POST',
            success: function(success) {
                alert(success);
            },
            error: function(err) {
                alert("Not Found")
            },
            status: function(statusCode) {
                alert(statusCode)
            },


        })


    })
})
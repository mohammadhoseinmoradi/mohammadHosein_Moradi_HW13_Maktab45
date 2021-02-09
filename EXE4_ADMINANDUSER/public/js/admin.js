$(".btn").click(function() {
    // console.log("22222222222222222222222222222222222");
    var dataUsers;
    $.ajax({
        url: '/Admin/getAllUser',
        method: 'GET',
        success: function(data) {
            dataUsers = JSON.stringify(data);
            show(dataUsers)
            alert(data)
        },
        error: function() {
            alert("err")
        }
    })

    function show(dataUsers) {
        console.log(dataUsers)
    }

    $("body").append('<div>Hello</div>')
    $("div").add(dataUsers);

})
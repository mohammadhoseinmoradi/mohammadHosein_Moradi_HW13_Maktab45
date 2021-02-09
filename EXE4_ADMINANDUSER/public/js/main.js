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
const inputs = document.querySelectorAll('.form-control input');
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
        .join('');
});
// $(document).ready(function () {
//         $('#newsletterForm').submit(function (event) {
//             event.preventDefault();
//             var fullName = $('#fullName').val();
//             var email = $('#email').val();

//             $.ajax({
//                 type: "POST",
//                 url: "/subscribe",
//                 data: {
//                     fullName: fullName,
//                     email: email
//                 },
//                 success: function (response) {
                   
//                     alert(response);
                   
//                 },
//                 error: function (xhr, status, error) {
//                     alert("An error occurred: " + error);
//                 }
//             });
//         });
//     });

$(document).ready(function () {
    $('#newsletterForm').submit(function (event) {
        event.preventDefault();
        var fullName = $('#fullName').val();
        var email = $('#email').val();

        $.ajax({
            type: "POST",
            url: "/subscribe",
            data: {
                fullName: fullName,
                email: email
            },
            success: function (response) {
                alert(response);
            },
            error: function (xhr, status, error) {
                alert("An error occurred: " + error);
            }
        });
    });
});


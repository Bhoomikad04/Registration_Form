$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            dob: $('#dob').val(),
            gender: $('#gender').val(),
        };

        // Send data to the server via AJAX
        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                // Create a new page dynamically and display the response
                const newWindow = window.open('', '_blank');
                newWindow.document.write(response);
                newWindow.document.close();
            },
            error: function () {
                alert('An error occurred while processing your request.');
            },
        });
    });
});

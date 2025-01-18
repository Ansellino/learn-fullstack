const form = document.getElementById('settings-form');



if(form){

 // Add an event listener to the form to intercept the submit event
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        // Now handle form data, for example, with fetch or AJAX
        const formData = new FormData(form);

        // Example: You could use fetch to submit the form data to the server
        fetch('/settings', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response (for example, display a success message)
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

}
   
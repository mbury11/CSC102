// Function to validate user inputs
function validateInputs() {
    // Get values from input fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var zipCode = document.getElementById("zipCode").value;

    // Combine first and last name
    var fullName = firstName + " " + lastName;

    // Check if full name exceeds 20 characters
    if (fullName.length > 20) {
        document.getElementById("message").innerHTML = "Warning: Full name exceeds 20 characters!";
        return false; // Stop form submission
    }

    // Check if zip code is valid (5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
        document.getElementById("message").innerHTML = "Warning: Zip code must be exactly 5 digits!";
        return false; // Stop form submission
    }

    // If inputs are valid, show secret message
    document.getElementById("message").innerHTML = "Welcome, " + fullName + "! Here is your secret message.";
    return false; // Prevent form submission for demonstration
}


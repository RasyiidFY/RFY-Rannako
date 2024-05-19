// script.js
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Both fields must be filled out");
        return false;
    }

    // Add additional validation logic as needed

    return true;
}

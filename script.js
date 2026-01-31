function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let fields = [name, email, password, confirmPassword, phone];

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] === "") {
            document.getElementById("errorMsg").innerText = "All fields are required";
            return false;
        }
    }

    if (name.length < 3) {
        document.getElementById("errorMsg").innerText = "Name must be at least 3 characters";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("errorMsg").innerText = "Please enter a valid email";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("errorMsg").innerText = "Password must be at least 6 characters";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("errorMsg").innerText = "Passwords do not match";
        return false;
    }

    if (isNaN(phone) || phone.length < 10) {
        document.getElementById("errorMsg").innerText = "Please enter a valid phone number";
        return false;
    }

    document.getElementById("errorMsg").style.color = "green";
    document.getElementById("errorMsg").innerText = "Form submitted successfully!";
    return true;
}

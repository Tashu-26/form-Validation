function validateForm() {
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    let phone = document.getElementById("phone");

    let passError = document.getElementById("passError");
    let confirmError = document.getElementById("confirmError");
    let phoneError = document.getElementById("phoneError");
    let successMsg = document.getElementById("successMsg");

    let valid = true;

    // reset
    passError.style.display = "none";
    confirmError.style.display = "none";
    phoneError.style.display = "none";
    successMsg.style.display = "none";

    password.classList.remove("shake");
    confirm.classList.remove("shake");
    phone.classList.remove("shake");

    // password length
    if (password.value.length < 6) {
        passError.style.display = "block";
        password.classList.add("shake");
        valid = false;
    }

    // password match
    if (password.value !== confirm.value) {
        confirmError.style.display = "block";
        confirm.classList.add("shake");
        valid = false;
    }

    // phone number
    if (phone.value.length !== 11) {
        phoneError.style.display = "block";
        phone.classList.add("shake");
        valid = false;
    }

    // success
    if (valid) {
        successMsg.style.display = "block";
    }
}

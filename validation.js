const form = document.getElementById("regForm");

function setError(id, message) {
    document.getElementById(id + "Error").textContent = message;
    document.getElementById(id).classList.toggle("invalid", message !== "");
    return message === "";
}

function validateName() {
    const v = form.name.value.trim();
    if (v === "") return setError("name", "Name is required.");
    if (v.length < 3) return setError("name", "Name must be at least 3 characters.");
    return setError("name", "");
}

function validateEmail() {
    const v = form.email.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (v === "") return setError("email", "Email is required.");
    if (!pattern.test(v)) return setError("email", "Please enter a valid email address.");
    return setError("email", "");
}

function validatePassword() {
    const v = form.password.value;
    if (v === "") return setError("password", "Password is required.");
    if (v.length < 8) return setError("password", "Password must be at least 8 characters.");
    return setError("password", "");
}

function validateConfirm() {
    const v = form.confirm.value;
    if (v === "") return setError("confirm", "Please confirm your password.");
    if (v !== form.password.value) return setError("confirm", "Passwords do not match.");
    return setError("confirm", "");
}

function validateAge() {
    const raw = form.age.value;
    if (raw === "") return setError("age", "Age is required.");
    const n = Number(raw);
    if (!Number.isInteger(n) || n < 1 || n > 120) {
        return setError("age", "Age must be a whole number between 1 and 120.");
    }
    return setError("age", "");
}

form.addEventListener("submit", function (event) {
   
    event.preventDefault();

    const results = [validateName(), validateEmail(), validatePassword(), validateConfirm(), validateAge()];
    const allValid = results.every(Boolean);

    if (allValid) {
        document.getElementById("success").hidden = false;
        form.reset();
    } else {
        document.getElementById("success").hidden = true;
    }
});


form.name.addEventListener("blur", validateName);
form.email.addEventListener("blur", validateEmail);
form.password.addEventListener("blur", validatePassword);
form.confirm.addEventListener("blur", validateConfirm);
form.age.addEventListener("blur", validateAge);
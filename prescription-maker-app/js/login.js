function login() {
    const uname = document.getElementById("username").value;
    const passwd = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (uname === "admin" && passwd === "admin123") {
        window.location.href = "prescription.html"; 
    } else {
        errorMsg.textContent = "Invalid username or password!";
    }
}

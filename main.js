function loginUser() {
  
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;

    if (username === "follow_yishahaha_onletterboxd" && password === "12345") {
        window.alert("Login successful! Welcome, " + username + "!");
        window.location.href = "notebook.html"; 


    } else {
        window.alert("Login failed! Please check your username and password.");
    }
}


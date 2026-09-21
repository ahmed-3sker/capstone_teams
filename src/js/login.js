const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const code = document.getElementById('username').value;
    const password = document.getElementById("password").value;
    const scode = localStorage.getItem("ucode");
    const spassword = localStorage.getItem("upassword");
    if (!scode) {
        alert("You don't have an account, Go to sign up and then come back wait for you baby");
        return;
    }
    if (code === scode && password === spassword) {
        alert("Login succefully, Welcome bro")
        window.location.href = "home_page.html";
    }
    else {
        alert("Your school code or password is wrong please try again")
    }
});
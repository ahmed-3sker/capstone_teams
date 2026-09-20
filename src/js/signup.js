const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const code = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const repeat = document.getElementById("repeat").value;
    const numb = document.getElementById("number").value;
    const name = document.getElementById("name").value;

    if (repeat === password) {
        localStorage.setItem("ucode", code);
        localStorage.setItem("upassword", password);
        localStorage.setItem("unumber", numb); 
        localStorage.setItem("uname", name);
        alert("Account created successfully. Now you can log in.");
    }
    else{
        alert("The password and its confirmation are diffrene");
    }
})





let create_account = document.getElementById('create_account');

create_account.addEventListener('click', function() {

    let user_name = document.getElementById("name").value;
    let numb = document.getElementById("number").value;

    localStorage.setItem('user_name', user_name);
    localStorage.setItem('phone_number', numb);

    window.location.href = '../pages/dashboard.html';
});
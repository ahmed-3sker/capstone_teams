const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // ahhhh first we need to stop page from refreshing

    //the inputs that i will need for detection
    const code = document.getElementById('username').value;
    const password = document.getElementById("password").value;

    // get the saved accounts which will be saved in the local storage
    const scode = localStorage.getItem("ucode");
    const spassword = localStorage.getItem("upassword");
    

    // check the user if he has an account or not
    if (!scode) {
        alert("You don't have an account, please sign up from the link in the buttom and come again");
        return;
    }

    // now if the user have an account this will check if his information is true
    if (code === scode && password === spassword) {
        alert("Login succefully, Welcome bro")
        window.location.href = "home_page.html";
    }
    else {
        alert("Your school code or password is wrong please try again")
    }
});
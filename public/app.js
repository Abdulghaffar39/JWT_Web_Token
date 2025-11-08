
function signup(e) {

    e.preventDefault();

    let fname = document.getElementById("firstName").value
    let lname = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let role = document.getElementById("role").value



    if (fname === "" || lname === "" || email === "" || password === "") {

        alert('Please fill all fields!');
        return;
    }



    if (role === "admin") {

        console.log("Admin selected");

    } else if (role === "user") {

        console.log("User selected");

    } else {

        alert('Please select user role')
        return

    };


    console.log('testing', fname, lname, email, password, role);

    window.location.href = 'login.html'

}


function login_page() {

    window.location.href = 'login.html'

}

function SignUp_page() {

    window.location.href = 'index.html'

}


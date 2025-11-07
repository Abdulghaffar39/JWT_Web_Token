
function signup(e) {

    e.preventDefault();

    let fname = document.getElementById("firstName").value
    let lname = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let role = document.getElementById("role")

    console.log('testing', fname, lname, email, password);
    

    if (fname === "" || lname === "" || email === "" || password === "") {

        alert('Please fill in all fields!');
        return;
    }
    

    if ( role.option.length === 0 ) {

        alert('Role is empty');
        return;
    }else{
        console.log('working successfuly');
        
    }


    window.location.href = 'login.html'

}


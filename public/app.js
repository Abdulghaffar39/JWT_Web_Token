
async function signup(e) {

    try {


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


        const res = await axios.post('http://localhost:3000/api/signUp',

            { fname, lname, email, password, role }

        )

        const data = res.data;
        console.log(res);


        if (data.status === 200) {

            alert(data.message);
            window.location.href = 'login.html';
            return;
        }


    } catch (err) {

        console.error(err);
        alert('⚠️ Server error or connection issue.');
    }

}


function login_page() {

    window.location.href = 'login.html'

}

function SignUp_page() {

    window.location.href = 'index.html'

}


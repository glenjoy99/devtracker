import React from 'react'
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    // });


    return (
        
        <div className='login_container'>
            <div className='login_header'>
                <h2>Restricted Area- Admin Login.</h2>
            </div>
            <form>
                <label for="email">Email:</label><br/>
                <input type="text" id="email" name="email"/><br/>
                <label for="pass">Password:</label><br/>
                <input type="text" id="pass" name="pass"/><br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Login

import React, {useState, useRef} from 'react'
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Admin from './Admin.js'

function Login() {

    const auth = getAuth();
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const [user, setUser] = useState(auth.currentUser); //change from null to google auth status
    console.log("Initial state is " + user);

    function handleAuth(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            console.log("User logged in.");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    if (user) {
        //return <Admin user={user}/>
        return <div><Admin/></div>
    } else {
        return (
            <div className='login_container'>
                <div className='login_header'>
                    <h2>Restricted Area- Admin Login.</h2>
                </div>
                <form onSubmit={handleAuth}>
                    <label for="email">Email:</label><br/>
                    <input ref={emailRef} type="email" id="email" name="email"/><br/>
                    <label for="pass">Password:</label><br/>
                    <input ref={passRef} type="password" id="pass" name="pass"/><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }


    
}

export default Login

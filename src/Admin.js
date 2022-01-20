import React, {useRef, useState} from 'react';
import firebase from './firebase';
import Login from './Login.js'
import { getAuth, signOut } from "firebase/auth";

function Admin(props) {

    const auth = getAuth();

    const [user, setUser] = useState(props.user);
       
    const projectName = useRef(null);
    const projectSmallDesc = useRef(null);
    const projectLongDesc = useRef(null);
    const projectImg = useRef(null);
    const projectLocation = useRef(null);


    function handleAddProject(event) {
        event.preventDefault();
    }

    function handleSignOut (event) {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null);
          }).catch((error) => {
            // An error happened.
          });
    }


    if (user == null) {
        return <div><Login/></div>
    } else {
        return (
            <div className='admin_container'>
                <div className='add_area'>
                    <h2>Add Projects</h2>
                    <div className='add_form'>
                        <form>
                            <label for="projname">Project Name:</label><br/>
                            <input ref={projectName} type="text" id="projname" name="projname"/><br/>
                            <label for="smalldesc">Short Description:</label><br/>
                            <input ref={projectSmallDesc} type="text" id="smalldesc" name="smalldesc"/><br/>
                            <label for="longdesc">Long Description:</label><br/>
                            <input ref={projectLongDesc} type="text" id="longdesc" name="longdesc"/><br/>
                            <label for="imgurl">Image URL:</label><br/>
                            <input ref={projectImg} type="text" id="imgurl" name="imgurl"/><br/>
                            <label for="location">Project Location:</label><br/>
                            <input ref={projectLocation} type="text" id="location" name="location"/><br/>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
                <div className='sign_outbtn'>
                    <button onClick={handleSignOut} type="button">Sign Out</button>
                </div>
            </div>
      );
    }

}



export default Admin;

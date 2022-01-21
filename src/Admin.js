import React, {useRef, useState} from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import firebase from './firebase'
import Login from './Login.js'
import './Admin.css'
import { getAuth, signOut } from "firebase/auth";

function Admin(props) {

    const auth = getAuth();

    const [user, setUser] = useState(auth.currentUser);
       
    const projectName = useRef(null);
    const projectSmallDesc = useRef(null);
    const projectLongDesc = useRef(null);
    const projectImg = useRef(null);
    const projectLocation = useRef(null);

    function clearFields() {
        projectName.current.value = '';
        projectSmallDesc.current.value = '';
        projectLongDesc.current.value = '';
        projectImg.current.value = '';
        projectLocation.current.value = '';
    }


    const handleAddProject = async(event) => {
        event.preventDefault();
        if (projectName.current.value != '' && projectSmallDesc.current.value  != '' && projectLongDesc.current.value  != ''
            && projectImg.current.value  != '' && projectLocation.current.value  != '') { //add .current.value to all 
                try {
                    console.log(projectLocation);
                    const docRef = await addDoc(collection(firebase.firestore(), projectLocation.current.value), {
                      name: projectName.current.value,
                      desc: projectSmallDesc.current.value,
                      longdesc: projectLongDesc.current.value,
                      img: projectImg.current.value
                    });
                    console.log("Document written with ID: ", docRef.id);
                    alert("Project sucessfully added");
                    clearFields();
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
            } else {
                alert("One or more fields is empty");
            }
        
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
                        <form onSubmit={handleAddProject}> 
                            <label for="projname">Project Name:</label><br/>
                            <input ref={projectName} type="text" autocomplete="off" id="projname" name="projname"/><br/>
                            <label for="smalldesc">Short Description:</label><br/>
                            <input ref={projectSmallDesc} type="text" autocomplete="off" id="smalldesc" name="smalldesc"/><br/>
                            <label for="longdesc">Long Description:</label><br/>
                            <input ref={projectLongDesc} type="text" autocomplete="off" id="longdesc" name="longdesc"/><br/>
                            <label for="imgurl">Image URL:</label><br/>
                            <input ref={projectImg} type="text" autocomplete="off" id="imgurl" name="imgurl"/><br/>
                            <label for="location">Project Location:</label><br/>
                            <input ref={projectLocation} type="text" autocomplete="off" id="location" name="location"/><br/>
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

import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import {useParams} from 'react-router-dom'
import './Project.css'

function Project(props) {

    const [project, setProject] = useState('');
    const [loading, setLoading] = useState(false);

    const {place} = useParams();
    const {id} = useParams();

    const ref = firebase.firestore().collection(place);
    
    function getProject() {
        setLoading(true);
        ref.doc(id).get()
        .then(snapshot => setProject(snapshot.data()))
        setLoading(false);
    }

    useEffect(() => {
        getProject(); //retrieve from database after page load
    }, []);
    

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='project_body'>
            <div className='project_image'>
                <img src={project.img} alt="project image"></img>
            </div>
            <div className='project_info'>
                <h2>PROJECT TITLE</h2>
                <h3>{project.name}</h3>
                <h2>DESCRIPTION</h2>
                <p>{project.longdesc}</p>
            </div>
            
        </div>
    )
}

export default Project;

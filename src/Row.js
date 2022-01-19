import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Card from './Card.js'
import './Row.css'
import firebase from './firebase'

function Row(props) {

    const [projects, setProjects] = useState({}); //changed from array to dict
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection(props.name);

    function getProjects() {
        setLoading(true);
        ref.onSnapshot((querySnapchot) => {
            const items = {};
            querySnapchot.forEach((doc) => {
                //items.push(doc.data());
                items[doc.id] = doc.data();
            });
            setProjects(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getProjects(); //retrieve from database after page load
    }, []);

    function createID(name) {
        return name.toLowerCase().replaceAll(' ', '_')
    }


    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <div className='row'>
            <h2>{props.display}</h2>
            <div className='cards'>
                {Object.keys(projects).map((key, index) => (
                <Link key={key} to={"/projects/" + props.name + "/" + key}>
                <Card name={projects[key].name} place={props.name} desc={projects[key].desc} img={projects[key].img}/>
                </Link>
                ))}
            </div> 
        </div>
    )
}

export default Row

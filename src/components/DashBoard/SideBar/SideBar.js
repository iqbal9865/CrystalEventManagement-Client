import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import {useState,useEffect} from 'react';
import { UserContext } from '../../../App';
import { useContext } from 'react';
const SideBar = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin',{
            method:'POST',
            headers: {
               'content-type': 'application/json'
            },
           body: JSON.stringify({email : logInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
        
    },[])
    return (
         <div style={{backgroundColor:'#f3c5a8',height:'700px'}} className='p-5'>
            
            <h5>
                {isAdmin && <li>
                    <Link to='/orderList'>Order List</Link>
                </li>} 
                {isAdmin && <li>
                    <Link to='/addService'>Add Services</Link>
                </li>}
                {isAdmin && <li>
                    <Link to='/makeAdmin'>Make Admin</Link>
                </li>}
                {isAdmin && <li>
                    <Link to='/manageService'>Manage Service</Link>
                </li>}
            </h5>
        </div> 
    );
};

export default SideBar;
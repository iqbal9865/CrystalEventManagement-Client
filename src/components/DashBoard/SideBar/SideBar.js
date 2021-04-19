import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <div style={{backgroundColor:'#f3c5a8',height:'700px'}} className='p-5'>
            <h5>
                <li>
                    <Link to='/orderList'>Order List</Link>
                </li>
                <li>
                    <Link to='/addService'>Add Services</Link>
                </li>
                <li>
                    <Link to='/makeAdmin'>Make Admin</Link>
                </li>
                <li>
                    <Link to='/manageService'>Manage Service</Link>
                </li>
            </h5>
        </div>
    );
};

export default SideBar;
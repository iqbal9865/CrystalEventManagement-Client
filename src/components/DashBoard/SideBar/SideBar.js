import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <div style={{backgroundColor:'#FF007F',height:'700px'}} className='m-5'>
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
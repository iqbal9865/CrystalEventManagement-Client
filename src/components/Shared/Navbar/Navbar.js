import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [logInUser, setLogInUser] = useContext(UserContext)
    return (
        <div>
            <nav style={{backgroundColor: '#f3c5a8'}} class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid w-100">
                    <h4 style={{color:'black',fontWeight:'bold'}} className='w-25'>Crystal Events</h4>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="w-75 nav justify-content-end">
                        <li class="nav-item">
                            <Link style={{fontSize:'20px',textDecoration:'none',color:'black'}} class="nav-link active" aria-current="page" to='/home'>Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{fontSize:'20px',textDecoration:'none',color:'black'}} class="nav-link active" aria-current="page" to='/addService'>Dashboard
                            </Link>
                        </li>
                        
                        <li class="nav-item">
                         {logInUser.email ? <strong> {logInUser.name} </strong> : 
                         <Link  style={{fontSize:'20px',textDecoration:'none'}} class="nav-link" to='/login'> <button style ={{backgroundColor:'#f3c5a8',padding:'5px 10px',borderRadius:'3px',border:'1px solid black'}}>
                               Login
                            </button> </Link>}
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
            <h3 style={{color:'#FF007F'}}>Crystal Events</h3>
                <SideBar></SideBar>
            </div>
           <div className="col-md-9"> 
           <h4 style={{color:'#FF007F'}} className='px-3 mb-5'>Add Services</h4>
              <div className='d-flex justify-content-start mt-5'>
              <input placeholder='Enter Email Address' style={{width:'300px', height:'40px'}} type="text"/>
               <input  style={{backgroundColor:'#FF007F', color:'white'}} type="submit" value="Submit"/>
              </div>
           </div>
            
        </div>
    );
};

export default MakeAdmin;<SideBar></SideBar>
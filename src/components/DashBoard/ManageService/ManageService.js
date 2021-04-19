import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from '../../Shared/Navbar/Navbar';
import SideBar from '../SideBar/SideBar';

const ManageService = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    const deleteProduct = (id) => {
        console.log('unique id : ',id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully',result)
        })
   }
    return (
        <div  className="row">
            <Navbar/>
            <div className='col-md-3'>
                <SideBar></SideBar>
            </div>
          
            <div className='col-md-9'>
                <div className='d-flex w-75'>
                    <h5 className='w-25'>Picture</h5>
                    <h5 className='w-25'>Event Type</h5>
                    <h5 className='w-25'>Management Price($)</h5>
                    <h5 className='w-25'></h5>
                </div>
            {
                
                services.map(service => <div className='d-flex m-4'>
                    <img  style={{height:'50px',margin:'10px 10px'}} src={service.imageURL} alt=""/>
                    <h5 className='w-25' style={{margin:'10px 13px'}}>{service.name}</h5>
                    <h5 className='w-25' style={{margin:'10px 13px'}}>{service.price}</h5>
                    <button style={{margin:'17px 10px',padding:'1px 10px'}}onClick={() => deleteProduct(service._id)} className="btn-danger w-25">Delete</button>
                </div> )
            }
            </div>
        </div>
    );
};

export default ManageService;
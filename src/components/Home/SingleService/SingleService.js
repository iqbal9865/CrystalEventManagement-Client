import React from 'react';

const SingleService = ({service}) => {
    return (
       
             <div className='col-md-4'>
                    <img style={{height:'40px'}} src={service.imageURL} alt=""/>
                    <h3>{service.name}</h3>
                    <h3>${service.price}</h3>
                    <p> {service.message} </p>   
                    <button style={{padding:'7px 10px', backgroundColor:'#f3c5a8',margin:'15px',border:'1px solid black',borderRadius:'3px', fontSize:'20px'}}>Booking</button>
                </div>
       
    );
};

export default SingleService;
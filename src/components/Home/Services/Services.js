import React from 'react';
import timeManagement from '../../../Icons/timeManagement.png'
import schedule from '../../../Icons/schedules.png'
import { useState, useEffect } from 'react'
import SingleService from '../SingleService/SingleService';
const Services = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('https://lit-shore-54368.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <section className='container my-5'>
            <h2 className='my-4'>OUR AWESOME  SERVICES </h2>
            <div className='row my-5'>   
             {
                services.map(service => <SingleService key={service._id} service={service}></SingleService>)
             }
            </div>
        </section>
    );
};

export default Services;
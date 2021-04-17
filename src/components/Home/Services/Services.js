import React from 'react';
import timeManagement from '../../../Icons/timeManagement.png'
import schedule from '../../../Icons/schedules.png'
import { useState, useEffect } from 'react'
import SingleService from '../SingleService/SingleService';
const Services = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <section className='container my-5'>
            <h2 className='my-4'>OUR AWESOME  SERVICES </h2>
            <div className='row my-5'>   
             {
                services.map(service => <SingleService service={service}></SingleService>)
             }
            </div>
        </section>
    );
};

export default Services;
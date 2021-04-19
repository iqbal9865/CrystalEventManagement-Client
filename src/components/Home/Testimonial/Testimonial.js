import React, { useEffect, useState } from 'react';
import img from '../../../Images/event_coordination.jpg'
const Testimonial = () => {
    const [reviews, setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        
        <section className='container'>
        <h2 className='mt-5'>Testimonial</h2>
        <div className='row mb-5'>
            {
                reviews.map(review =>
                    <div className='col-md-4'>
                       
                       <img src={review.imageURL} alt=""/>
                        <h4>{review.name}</h4>
                        <h6>{review.designation}</h6>
                        <p>{review.comment}</p>
                      
                    </div>
                    )
            }
        </div>
        </section>
    );
};

export default Testimonial;
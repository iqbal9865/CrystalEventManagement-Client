import React from 'react';
import decor from '../../../Images/Decor_servic.jpg'
const BusinessDetails = () => {
    return (
        <section style={{backgroundColor:'#f3c5a8',padding:'30px',height:'500px',borderRadius:'1em'}} className='container row my-5 m-auto align-items-center'>
            <div className='col-md-6'>
                <img class='image-fluid' style={{height: '350px', width:'550px',borderRadius:'1em'}} src={decor} alt=""/>
            </div>
            <div className='col-md-6'>
                <h2>Let US Handle <br/> Your Event Professionally!</h2>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit error nam autem asperiores facilis adipisci nobis, debitis at porro deleniti provident rem, et iure saepe illo beatae quam dolorem cumque ut laboriosam neque temporibus maxime. Adipisci quidem nihil cumque minus ex explicabo. Rerum tenetur natus sequi aperiam ex ea.</small>

                <div className='d-flex mx-5'>
                    <div className='mx-5'>
                        <h1 style={{color:'#FF007F'}}>600+</h1>
                        <h5>Happy Customer</h5>
                    </div>
                    <div>
                        <h1 style={{color:'#FF007F'}}>20+</h1>
                        <h5>Total Services</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessDetails;
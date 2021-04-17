import React from 'react';
import img from '../../../Images/event_coordination.jpg'
const Testimonial = () => {
    return (
        
        <section className='container'>
        <h2 className='m-5'>Testimonial</h2>
        <div className='row m-5'>
            <div className='col-md-4'>   
                <div className='d-flex'>   
                   <div> 
                       <img style={{height:'40px'}} src={img} alt=""/>\
                    </div>
                    <div>
                        <h4>Nash Patric</h4>
                        <h6>CEO, Monpol</h6>
                    </div>
                </div>         
                <div>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum exercitationem accusantium qui blanditiis! Ratione consequatur, nesciunt quia qui beatae, quibusdam animi autem quae </small>
                </div>    
            </div>
            
            <div className='col-md-4'>   
                <div className='d-flex'>   
                   <div> 
                       <img style={{height:'40px'}} src={img} alt=""/>\
                    </div>
                    <div>
                        <h4>Nash Patric</h4>
                        <h6>CEO, Monpol</h6>
                    </div>
                </div>         
                <div>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum exercitationem accusantium qui blanditiis! Ratione consequatur, nesciunt quia qui beatae, quibusdam animi autem quae </small>
                </div>    
            </div>

            <div className='col-md-4'>   
                <div className='d-flex'>   
                   <div> 
                       <img style={{height:'40px'}} src={img} alt=""/>\
                    </div>
                    <div>
                        <h4>Nash Patric</h4>
                        <h6>CEO, Monpol</h6>
                    </div>
                </div>         
                <div>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum exercitationem accusantium qui blanditiis! Ratione consequatur, nesciunt quia qui beatae, quibusdam animi autem quae </small>
                </div>    
            </div>

            </div>
        </section>
    );
};

export default Testimonial;
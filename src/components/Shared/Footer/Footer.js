import React from 'react';

const Footer = () => {
    return (
       <section style={{backgroundColor:'#f3c5a8', padding:'25px', listStyle:'none'}} className='mt-5'>
           <div className="container">
               <div className='row'>
               <div className="col-md-3 col-6">
                    <strong>U#222, 2nd Floor, Road No 04</strong>
                    <strong>BITS,Ghulshan,Dhaka</strong>
               </div>
               <div className="col-md-3 col-6">
                    <h3>Company</h3>
                    <h6>About</h6>
                    <h6>Project</h6>
                    <h6>Our team</h6>
                    <h6>Terms & Condition</h6>
               </div>
               <div className="col-md-3 col-6 m-auto">
                    <h3>Quick Link</h3>
                    <h6>Our Blogs</h6>
                    <h6>Quick Links</h6>
                    <h6>Contact US</h6>
                    <h6>Rentals</h6>
               </div>
               <div className="col-md-3 col-6">
                    <h3>About US</h3>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut impedit repellat temporibus ex. Blanditiis, inventore perspiciatis. Accusantium ipsum ad iusto.</small>
               </div>
           </div>
           </div>
       </section>
    );
};

export default Footer;
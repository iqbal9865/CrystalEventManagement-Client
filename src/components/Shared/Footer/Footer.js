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
                    <li>About</li>
                    <li>Project</li>
                    <li>Our team</li>
                    <li>Terms & Condition</li>
               </div>
               <div className="col-md-3 col-6">
                    <h3>Quick Link</h3>
                    <li>Our Blogs</li>
                    <li>Quick Links</li>
                    <li>Contact US</li>
                    <li>Rentals</li>
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
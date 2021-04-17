import React from 'react';
import headerImage from '../../../Images/headerImage.jpg'
const HeaderMain = () => {
    return (
        <div style={{backgroundColor: '#f3c5a8',borderRadius:'2em'}} className='row container mt-5 m-auto d-flex align-items-center'>
            <div className="col-md-6">
                <h2 style={{fontWeight:'bold'}}>Crystal Events For</h2> <br/>
                <h4 >Event Management and Conference & Party</h4>
                <small style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam sunt, omnis, libero hic repellat consectetur repellendus, nisi mollitia et doloremque cupiditate nostrum a ipsa sapiente explicabo. Explicabo, facilis quod!</small> <br/>

                <button style={{padding:'7px 10px', backgroundColor:'#f3c5a8',margin:'15px',border:'1px solid black',borderRadius:'3px', fontSize:'20px'}}>Get An Appointment</button>
            </div>
            <div className="col-md-6">
                <img className='image-fluid' style={{height:'400px', width:'500px'}} src={headerImage} alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;
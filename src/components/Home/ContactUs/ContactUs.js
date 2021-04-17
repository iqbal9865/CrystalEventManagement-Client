import React from 'react';
import { useForm } from "react-hook-form";
import './ContactUs.css'
const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className='container'>
            <h3 style={{color: '#FF007F'}}>CONTACT US FOR ANY QUERY</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
      
           <div className='d-flex justify-content-center'>
                <input {...register("name")} placeholder="Enter Your Name" /> <br/>
                <input {...register("address")} placeholder="Enter Your Address" /> <br/>
           </div>
            <div className='d-flex justify-content-center'>
            <input {...register("email", { required: true })} placeholder='Enter Your Email' /> <br/>
            {errors.email && <span>This field is required</span>}

            <input {...register("phone", { required: true })}  placeholder="Enter Your Phone" /> <br/>
            {errors.phone && <span>This field is required</span>}
            </div>

            <div>
            <input style={{height:'100px', width:'820px'}} {...register("message", { required: true })}  placeholder="What You Want?"/> <br/>
            {errors.message && <span>This field is required</span>}

            <input style={{backgroundColor:'#f3c5a8',fontSize:'19px',color:'black'}} type="submit" value='Send Message' />
            </div>

        </form>
        </section>
    );
};

export default ContactUs;
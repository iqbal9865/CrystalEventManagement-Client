import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            email: data.email
        }
        const url = `http://localhost:5000/addAdmin`
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
          .then(data => {
            if (data) {
              alert('Admin Added in DataBase');
            }
          })
}
    return (
        <div className='row'>
            <div className="col-md-3">
            <h3 style={{color:'#FF007F'}}>Crystal Events</h3>
                <SideBar></SideBar>
            </div>
           <div className="col-md-9"> 
           <h4 style={{color:'#FF007F'}} className='px-3 mb-5'>Add Services</h4>
              <div className='d-flex justify-content-start mt-5'>
              <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex justify-content-start'>
                        <input {...register("email", { required: true })} placeholder='Enter Email Address' /> <br/>
                        {errors.email && <span>This field is required</span>}
    
                    <input style={{backgroundColor:'#FF007F',fontSize:'19px',color:'white'}} type="submit" value='Save'/>
                    </div>
                </form>
              </div>
             
           </div>
            
        </div>
    );
};

export default MakeAdmin;<SideBar></SideBar>
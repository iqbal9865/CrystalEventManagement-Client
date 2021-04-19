
import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react'
import BookSidebar from '../BookSidebar/BookSidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {_id} = useParams()
    const [booking, setBooking] = useState({})
    const [logInUser,setLogInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setBooking(data.find(book => book._id === _id)))
    },[])
    const {name,price} = booking;
    return (
        <div className='row'>
            <Navbar></Navbar>
            <div className="col-md-3">
                
                <BookSidebar></BookSidebar>
            </div>
            <div className='col-md-7'>
                <h3>Book</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                 <input placeholder='Enter Email' defaultValue={logInUser.email} {...register("email", { required: true })} /> <br/>
                 <input  placeholder='Enter Name' defaultValue={logInUser.name} {...register("userName", { required: true })} /> <br/>
                  {errors.userName && <span>This field is required</span>}

                <input defaultValue={name} {...register("name")} />
                <h5>Your Service Charge will be <span style={{color:'#FF007F'}}> ${price}</span></h5>
                <ProcessPayment></ProcessPayment>
                {/* <input style={{backgroundColor:'#f3c5a8'}} value='CheckOut' type="submit" /> */}
                </form>
                
            </div>
        </div>
    );
};

export default Book;
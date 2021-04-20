
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
    const [shippingData, setShippingData] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setShippingData(data);
      };
    const {_id} = useParams()
    const [booking, setBooking] = useState({})
    const [logInUser,setLogInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setBooking(data.find(book => book._id === _id)))
    },[])
    const {eventName,price} = booking;
    const handlePaymentSuccess = paymentId => {
      console.log('console',shippingData)
        const orderDetails = { 
          ...logInUser,  
          shipment: shippingData.eventName, 
          paymentId,
          orderTime: new Date() 
        };
    
        fetch(`https://lit-shore-54368.herokuapp.com/addOrders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderDetails)
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
            //   processOrder();
              alert('your order placed successfully');
            }
          })
      }

   
    return (
        <div className='row'>
            <Navbar></Navbar>
            <div className="col-md-3">
                
                <BookSidebar></BookSidebar>
            </div>
            <div className='col-md-7'>
                <h3>Book</h3>
                <div style={{display: shippingData ? 'none': 'block'}} className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Enter Email' defaultValue={logInUser.email} {...register("email", { required: true })} /> <br/>
                    <input  placeholder='Enter Name' defaultValue={logInUser.name} {...register("userName", { required: true })} /> <br/>
                    {errors.userName && <span>This field is required</span>}

                    <input placeholder='Enter Event Name' defaultValue={eventName} {...register("eventName")} />
                    <h5>Your Service Charge will be <span style={{color:'#FF007F'}}> ${price}</span></h5>
                    
                    <input style={{backgroundColor:'#f3c5a8'}} value='Shipment' type="submit" />
                    </form>
                </div>
                <div style={{display: shippingData ? 'block': 'none'}} className="col-md-6">
                     <h2>Payment Process</h2>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
                
            </div>
        </div>
    );
};

export default Book;
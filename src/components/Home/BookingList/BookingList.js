import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import BookSidebar from '../BookSidebar/BookSidebar';
import AllBooking from './AllBooking';

const BookingList = () => {
    const [logInUser,setLogInUser] = useContext(UserContext)
const [orders, setOrders] = useState([])
useEffect(()=> {
    fetch('http://localhost:5000/orders?email='+logInUser.email)
    .then(res => res.json())
    .then(data => setOrders(data))
},[])
    return (
        <div className='row'>
            <Navbar/>
            <div className="col-md-3">
                <BookSidebar/>
            </div>
            <div className='col-md-9 mt-3'>
                <h3 style={{margin:'20px 10px'}}>Your All Booking</h3>
                <div style={{borderBottom:'1px solid black'}} className='w-100 d-flex'>
                    <h5 className='w-25'>Event Type</h5>
                    <h5 className='w-25'>Your Payment ID</h5>
                    <h5 className='w-25'>Booked Time</h5>
                </div>
                <br/>
          {
              orders.map(order => <div className='d-flex my-2'>
                  
                  <h5 className='w-25'>{order.shipment}</h5>
                  <h6 className='w-25'>{order.paymentId}</h6>
                  <h6 className='w-25'>{order.orderTime}</h6>
              </div>)
          }
         
          </div>
        </div>
    );
};

export default BookingList;
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SideBar from '../SideBar/SideBar';

const OrderList = () => {
    const [orders, setOrders] = useState([])
   
useEffect(()=> {
    fetch('https://lit-shore-54368.herokuapp.com/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
},[])
    return (
        <div className='row'>
        <Navbar/>
        <div className="col-md-3">
            <SideBar/>
        </div>
        <div className='col-md-9 mt-3'>
            <h3 style={{margin:'20px 10px'}}>All Clients Booking</h3>
            <div style={{borderBottom:'1px solid black'}} className='w-100 d-flex'>
                <h5 className='w-25'>Event Type</h5>
                <h5 className='w-25'>Payment ID</h5>
                <h5 className='w-25'>Booked Time</h5>
                <h5 className='w-25'>Email</h5>
            </div>
            <br/>
      {
          orders.map(order => <div className='d-flex my-2'>
              
              <h5 className='w-25'>{order.shipment}</h5>
              <h6 className='w-25'>{order.paymentId}</h6>
              <h6 className='w-25'>{order.orderTime}</h6>
              <h6 className='w-25'>{order.email}</h6>
          </div>)
      }
     
      </div>
    </div>
    );
};

export default OrderList;
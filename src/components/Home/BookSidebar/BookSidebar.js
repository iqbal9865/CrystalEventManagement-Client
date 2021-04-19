import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
const BookSidebar = () => {
    
    return(
        <div style={{backgroundColor:'#f3c5a8',height:'550px'}} className='p-5'>
            <h5>
                <li>
                    <Link to='/'>Book</Link>
                </li>
                <li>
                    <Link to='/bookingList'>Booking List</Link>
                </li>
                <li>
                    <Link to='/review'>Review</Link>
                </li>
               
            </h5>
        </div>
    )
}
export default BookSidebar;
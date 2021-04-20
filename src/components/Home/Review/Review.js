import React, { useState } from 'react';
import BookSidebar from '../BookSidebar/BookSidebar';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';
import axios from 'axios';

const Review = () => {
    const [imageURL,setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

        const onSubmit = data => {
            console.log('data=',data)
            const eventData = {
                name: data.name,
                imageURL: imageURL,
                comment: data.comment,
                designation: data.designation
            }
            console.log(eventData)
            const url = `https://lit-shore-54368.herokuapp.com/addReview`
            fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(eventData)
            })
            .then(res => console.log('server side res: ',res))
        };
    
    


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','d2847ca22b20bc82ca92f90a0f0fd02d');
        imageData.append('image',event.target.files[0])
 
        axios.post('https://api.imgbb.com/1/upload', imageData)
       .then(function (response) {
         setImageURL(response.data.data.display_url);
       })
       .catch(function (error) {
         console.log(error);
       });
     }
    return (
        <div className='row'>
            <Navbar/>
            <div className="col-md-3 ">
                <BookSidebar/>
            </div>
        <div className="col-md-9 mt-5 d-flex justify-content-start">

    <form className='mx-5' onSubmit={handleSubmit(onSubmit)}> 
    <h4>Add Review</h4>
      <input placeholder='Your Name' {...register("name")} /> <br/>
      <input placeholder='Company Name, Designation' {...register("designation", { required: true })} /> <br/>
      {errors.designation && <span>This field is required</span>}

      <input style={{height:'100px'}} placeholder='Description here' {...register("comment", { required: true })} /> <br/>
      {errors.comment && <span>This field is required</span>}
      <input onChange={handleImageUpload} type='file' placeholder='Your Picture' {...register("image", { required: true })} />
      {errors.image && <span>This field is required</span>} <br/>
      <input style={{backgroundColor:'#f3c5a8'}} type="submit" />
    </form>
        </div>
        </div>
    );
};

export default Review;
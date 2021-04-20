import React from 'react';
import {useState,useEffect} from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Navbar from '../../Shared/Navbar/Navbar';
import { UserContext } from '../../../App';
import { useContext } from 'react';
const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logInUser, setLogInUser] = useContext(UserContext)
    const [imageURL,setImageURL] = useState(null)
    const onSubmit = data => {
        console.log('data=',data)
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            message: data.message,
            price: data.price
        }
        const url = `https://lit-shore-54368.herokuapp.com/addServices`
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
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('https://lit-shore-54368.herokuapp.com/isAdmin',{
            method:'POST',
            headers: {
               'content-type': 'application/json'
            },
           body: JSON.stringify({email : logInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
        
    },[])
    return (
        <div>
        <Navbar/>
        <div className='row'>
           
            <div className="col-md-3">
                
                 <SideBar></SideBar>
            </div>
            
            {isAdmin && <div className='col-md-9'>
               
                <h4 style={{color:'#FF007F'}} className='px-3'>Add Services</h4> 
                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex justify-content-start'>
                        <input {...register("name", { required: true })} placeholder='Enter Service Title' /> <br/>
                        {errors.name && <span>This field is required</span>}

                        <input style={{width:'300px',border:'1px solid black',padding:'4px 30px'}} {...register("image", { required: true })} onChange ={handleImageUpload}  type='file' /> <br/>
                        {errors.image && <span>This field is required</span>}
                    
                        </div>
                    
                    <div className='d-flex justify-content-start'>
                    <input style={{height:'100px', width:'400px'}} {...register("message", { required: true })} /> <br/>
                    {errors.message && <span>This field is required</span>}

                    <input placeholder='Enter Price($)' style={{ width:'300px'}} {...register("price", { required: true })} /> <br/>
                    {errors.price && <span>This field is required</span>}
                    </div>
                    <div className='d-flex justify-content-start'>
                    <input style={{backgroundColor:'#FF007F',fontSize:'19px',color:'white'}} type="submit" />
                    </div>
                </form>
                
            </div>}
            
            
        </div>
        </div>
    );
};

export default AddService;
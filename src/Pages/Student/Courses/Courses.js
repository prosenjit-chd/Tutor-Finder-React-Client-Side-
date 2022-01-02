import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Courses.css'

const Courses = () => {
    
    // form
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
   
    return (
        <div className="product">
            <div>
            <h2>Courses page</h2>
            </div>
            {/* 2nd-part form */}
            <div className="form-added">
            <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/><br/>
           <input type="number" {...register("salary")} placeholder="Salary" /><br/>
           <input type="number" {...register("area")} placeholder="Area" /><br/>
           <input type="number" {...register("phone")} placeholder="Phone Number" /><br/>
           <input type="text" {...register("institute")} placeholder="institute" /><br/>
           <input type="text" {...register("current_education")} placeholder="current_education" /><br/>
           <input {...register("img")} placeholder="img-url" /><br/>
           <input className="btn-color" type="submit" />
            </form>
            </div>
        </div>
    )
}

export default Courses

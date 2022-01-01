import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const NewTeacherStatus = () => {
    AOS.init()
    const [teachers,setTeachers]=useState([]);
    useEffect(()=>{
        fetch('./tutor.json')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])
    console.log(teachers)
    return (
        <Container>
            <h1 className="text-center">This is New Teachers Status page</h1>
           
                <div className="row">
                    {
                    teachers.map(teacher =><div key={teacher?.id} teacher={teacher} className="col col-lg-6 col-md-6 col-sm-12 col-12 "
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2500">
                    <div className="card mb-3 single-card ">
                      <div className="row g-0 ">
                        <div className="col-md-4 border ">
                            <img src={teacher?.img} className="img-fluid card-image rounded-pill " alt="..."/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                          <h4 className="card-title fw-bolder text-primary">{teacher?.name}</h4>
                          <p className="card-text fw-bolder">Tuition Class : {teacher?.class}</p>
                          <p className="card-text fw-bolder">Teaching : {teacher?.subject[0]}, {teacher?.subject[1]}</p>
                          <p className="card-text fw-bolder">Qualification : {teacher?.current_education}</p>
                          <p className="card-text fw-bolder">Institute : {teacher?.institute}</p>
                          <p className="card-text fw-bolder">Email : {teacher?.email}</p>
                          <p className="card-text fw-bolder">Phone : {teacher?.mobile}</p>
                          <p className="card-text fw-bolder">Salary : Tk {teacher?.salary}</p>
                          <p className="card-text fw-bolder">Tuition Areas : {teacher?.area}</p>
                          
                          <p className="card-text fw-bold border-top">Current Status: <small className=" fw-bold text-primary "> Pending</small></p>
                        </div>
                      </div>
                    </div>
                   </div>
                </div>)
                    }

                </div>

         
        </Container>
    );
};

export default NewTeacherStatus;
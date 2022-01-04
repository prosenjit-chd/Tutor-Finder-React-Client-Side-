import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import SingleAbout from '../About/SingleAbout'
import Teach from '../Teach/Teach'
import './About.css'

const About = () => {
    const [teachs, setTeachs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://tutor-finder.herokuapp.com/tutors?status=true')
            .then(res => res.json())
            .then(data => {
                setTeachs(data.tutors)
                setIsLoading(false)
            })

    }, [])


    return (
        <div className='container-fluid'>

            <img className='img-fluid w-100' src="https://i.ibb.co/5GLxXq5/Capture.png" alt="" />
            <marquee><h1 className="text-center my-5 fs-1 fw-bolder"> Tutor Finder</h1></marquee>
            {isLoading && <Spinner animation="border" variant="primary" />}
            <div className='row'>

                {/* card */}
                <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                    <Teach />
                </div>

                {/* product */}
                <div className='col-lg-9 col-md-9 col-sm-12 col-12'>

                    {
                        <div className="row gy-2 ">
                            {teachs.map(teach => <SingleAbout
                                key={teach.name}
                                teach={teach}
                            ></SingleAbout>)
                            }
                        </div>
                    }
                </div>


            </div>
        </div>
    )
}

export default About

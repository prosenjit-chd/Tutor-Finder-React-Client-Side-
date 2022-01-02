import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleAbout from '../About/SingleAbout'
import Teach from '../Teach/Teach'
import './About.css'

const About = () => {
    const [teachs, setTeachs] = useState([])

    useEffect(()=>{
        fetch('./tutor.json')
        .then(res => res.json())
        .then(data => setTeachs(data))
    }, [])
  
    return (
        <>
         <img src="https://i.ibb.co/5GLxXq5/Capture.png" alt="" />
          <div className="two-dimentional">
              {/* card */}
                <div>
                    <Teach/>
                </div>
                {/* product */}
                <div className='column'>
                    <h2 className="text-center my-5"> Tutor Finder</h2>
                    {
                            <Row xs={1} md={2} className="g-4 single-product">
                            {teachs.slice(0,10).map(teach => <SingleAbout
                        key={teach.name}
                        teach={teach}
                        ></SingleAbout>)
                            }
                            </Row>
                        }
                </div>
        </div>
        </>
    )
}

export default About

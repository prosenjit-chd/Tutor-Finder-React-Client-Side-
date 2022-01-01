import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Banner from '../../Banner'
import SingleAbout from './SingleAbout'

// import SingleHome from './SingleHome'
// import './Home.css'

const About = () => {
    const [teachs, setTeachs] = useState([])

    useEffect(()=>{
        fetch('./tutor.json')
        .then(res => res.json())
        .then(data => setTeachs(data))
    }, [])
    return (
        <>
         <Banner/>
        <div>
           
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
        </>
    )
}

export default About

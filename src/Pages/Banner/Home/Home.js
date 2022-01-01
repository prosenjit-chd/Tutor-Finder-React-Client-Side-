import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Banner from '../Banner'
import SingleHome from './SingleHome'
import './Home.css'

const Home = () => {
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
                {teachs.slice(0,6).map(teach => <SingleHome
               key={teach.name}
               teach={teach}
               ></SingleHome>)
                }
                </Row>
            }
        </div>
        </>
    )
}

export default Home

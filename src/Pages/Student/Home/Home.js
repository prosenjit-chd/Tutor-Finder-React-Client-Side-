import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleHome from '../SingleHome/SingleHome'
import './Home.css'
import Banner from '../Banner/Banner'

const Home = () => {
    const [teachs, setTeachs] = useState([])

    useEffect(()=>{
        fetch('https://tutor-finder.herokuapp.com/tutors')
        .then(res => res.json())
        .then(data => setTeachs(data.tutors))
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

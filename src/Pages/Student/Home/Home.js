import React, { useEffect, useState } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import SingleHome from '../SingleHome/SingleHome'
import './Home.css'
import Banner from '../Banner/Banner'

const Home = () => {
    const [teachs, setTeachs] = useState([])
    const [isLoading, setIsLoading] = useState(true);

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
            <Banner />
            <div>

                <h2 className="text-center my-5"> Tutor Finder</h2>
                {isLoading && <Spinner animation="border" variant="primary" />}
                {
                    <Row xs={1} md={2} className="g-4 single-product">
                        {teachs.slice(0, 6).map(teach => <SingleHome
                            key={teach.name}
                            teach={teach}
                        ></SingleHome>)
                        }
                    </Row>
                }
            </div>
        </div>
    )
}

export default Home

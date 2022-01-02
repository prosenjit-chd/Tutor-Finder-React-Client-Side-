import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleAbout.css'

const SingleAbout = ({teach}) => {
    const {img, name, salary, mobile, institute, area, current_education} = teach;
    console.log(teach)
    return (
        <div className='col-lg-4 col-md-6 col-12 card-design mx-4'>
            <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" className='img-design h-70' src={img} />
            <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{institute}</Card.Text>
            <Card.Text>{current_education}</Card.Text>
            <Card.Text>{salary} tk/month</Card.Text>
            <Card.Text>{mobile}</Card.Text>
            <Card.Text>{area}</Card.Text>
            <Link to={`/Courses/${teach.id}`}><Button className="btn-color" variant="primary">Details</Button></Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default SingleAbout

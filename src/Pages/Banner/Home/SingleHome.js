import React from 'react'
import { Card } from 'react-bootstrap';

const SingleHome = ({teach}) => {
    const {img, name, salary} = teach;
    return (
        <div className='col-lg-4 col-md-6 col-12 card-design'>
            <Card className="card" style={{ width: '18rem' }}>
    <Card.Img variant="top" className='img-design h-70' src={img} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
       {salary}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
    </Card>
</div>
    )
}

export default SingleHome

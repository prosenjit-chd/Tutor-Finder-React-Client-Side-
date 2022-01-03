import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const AddTutor = () => {
    const [product, setProduct] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...product };
        newInfo[field] = value;
        setProduct(newInfo);
    }

    const handleSubmitProduct = e => {
        e.preventDefault();
        const newProduct = {
            ...product
        }
        newProduct["status"] = true;
        console.log(newProduct);
        axios.post('https://tutor-finder.herokuapp.com/tutors', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "Successfully added!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '700px' }}>
                <h3 className="text-center fw-bold mb-2">Add Tutor</h3>
                <Form onSubmit={handleSubmitProduct}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onBlur={handleOnBlur} type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMadeBy">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control name="subject" onBlur={handleOnBlur} type="text" placeholder="Subject Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Education</Form.Label>
                            <Form.Control name="current_education" onBlur={handleOnBlur} type="text" placeholder="Bsc in English" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Institute</Form.Label>
                            <Form.Control name="institute" onBlur={handleOnBlur} type="text" placeholder="Dhaka University" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control name="mobile" onBlur={handleOnBlur} type="text" placeholder="01789142765" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" onBlur={handleOnBlur} type="text" placeholder="abc@gmail.com" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImg">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control name="img" onBlur={handleOnBlur} placeholder="http://example.png" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control name="salary" onBlur={handleOnBlur} type="number" placeholder="3500" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Area</Form.Label>
                            <Form.Control name="area" onBlur={handleOnBlur} type="text" placeholder="Dhaka" />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Class</Form.Label>
                            <Form.Control name="class" onBlur={handleOnBlur} type="text" placeholder="6-10" />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddTutor;
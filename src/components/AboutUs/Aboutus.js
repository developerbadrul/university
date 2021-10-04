import React from 'react';
import { Card, Carousel, Col, Form, Row, Button } from 'react-bootstrap';
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div>
            {/* Slider  */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1232&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            {/* Grid Card  */}
            <div className="Grid-card">
                <h2>Teachers</h2>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573122618.png" />
                            <Card.Body>
                                <Card.Title>Jhankar Mahbub</Card.Title>
                                <Card.Text>
                                CEO & Founder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625419447111.png" />
                            <Card.Body>
                                <Card.Title>Rasel Ahmed</Card.Title>
                                <Card.Text>
                                Product Manager
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573160811.png" />
                            <Card.Body>
                                <Card.Title>Karina Islam</Card.Title>
                                <Card.Text>
                                Advisor
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573176714.png" />
                            <Card.Body>
                                <Card.Title>Shajedul Karim</Card.Title>
                                <Card.Text>
                                Chief Operating Officer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            </div>
            {/* Contact Form  */}
            <div className="Form">
                <h2>Contact Us</h2>
                <Form>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Row>

                        <Col>
                            <Form.Control type="text" placeholder=" Message" col="3" />
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Aboutus;
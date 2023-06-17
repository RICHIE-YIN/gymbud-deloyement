import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { Container, Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap';

const images = [
{
    id: 1, 
    src: 'https://chefirvine.com/wp-content/uploads/2019/11/DL-2-WEB-e1573073017672.png',
    alt: 'Image 1',
    style: { width: 1800, height: 1600 },
},
{
    id: 2,
    src: 'https://media.istockphoto.com/id/587947766/photo/body-building.jpg?s=612x612&w=0&k=20&c=9h8vI82nTazAQI5Ra9NpbMNDwNLivuwnUPCBG3454u0=',
    alt: 'Image 2',
    style: { width: 1800, height: 1600 },
},
{
    id: 3,
    src: 'https://img.freepik.com/premium-photo/black-white-image-fitness-woman-gym-perfect-sexy-body-sport-bodybuilding-concept-healthy-lifestyle-workout-motivation_392761-4743.jpg',
    alt: 'Image 3',
    style: { width: 1800, height: 1600 },
},
{
    id: 4,
    src: 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1390590884_600x.jpg?v=1633774338',
    alt: 'Image 3',
    style: { width: 1800, height: 1600 },
},
];

export default () => {
const [currentImage, setCurrentImage] = useState(images[0]);

const handleImageChange = (index) => {
setCurrentImage(images[index]);
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // set the time between slides in milliseconds
};

    return (
                <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">GymBud</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/beginners">Beginner? Start here!</Nav.Link>
                        <Nav.Link href="/macros">Macro Calculator</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/splits">Different types of SPLITS</NavDropdown.Item>
                        <NavDropdown.Item href="/planner">Workout planner/tracker</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/meals">AI MEAL PLANNER</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#login">Log In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div style={{textAlign: "center", backgroundColor: "black"}}>
                <Carousel>
                    <Carousel.Item interval={2500}>
                        <img
                        className="d-block w-100"
                        src="https://www.businessmole.com/wp-content/uploads/2023/03/andrew-tate.jpg"
                        alt="Fourth slide"
                        style={{ width: "1600px", height: "1400px" }}
                        />
                        <Carousel.Caption>
                        <h3>BETTER</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/587947766/photo/body-building.jpg?s=612x612&w=0&k=20&c=9h8vI82nTazAQI5Ra9NpbMNDwNLivuwnUPCBG3454u0="
                        alt="Second slide"
                        style={{ width: "1600px", height: "1400px" }}
                        />
                        <Carousel.Caption>
                        <h3>THAN</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/black-white-image-fitness-woman-gym-perfect-sexy-body-sport-bodybuilding-concept-healthy-lifestyle-workout-motivation_392761-4743.jpg"
                        alt="Third slide"
                        style={{ width: "1600px", height: "1400px" }}
                        />
                        <Carousel.Caption>
                        <h3>BEFORE</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                    <Carousel.Item  interval={2500}>
                        <img
                        className="d-block w-100"
                        src="https://chefirvine.com/wp-content/uploads/2019/11/DL-2-WEB-e1573073017672.png"
                        alt="First slide"
                        style={{ width: "1600px", height: "1400px" }}
                        />
                        <Carousel.Caption>
                        <h3>BE</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </div>
        </div>
    )
};
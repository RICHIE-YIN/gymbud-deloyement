import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default () => {

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
                <div>
                    <h1>Workout Splits</h1>
                    <p>When designing a workout routine, it's essential to choose a split that fits your goals, preferences, and schedule. A workout split refers to how you distribute your training sessions throughout the week, targeting specific muscle groups on different days. For gym newcomers, it's important to understand the variety of workout splits available and choose one that caters to your goals and lifestyle. Here are some popular workout splits, including the Bro Split, Science Split, Push-Pull-Legs (PPL), Arnold Split, and a custom split designed for women looking to develop shapely legs and a well-rounded posterior.</p>
                    <ol>
                        <ol>
                            <h5><strong>Bro Split:</strong></h5>
                            <p>The Bro Split, also known as the body part split, involves training one major muscle group per day, typically with a frequency of once per week. This split allows for high training volume and intensity for each muscle group, but it might not be ideal for beginners due to its lower frequency. A typical Bro Split could look like this:</p>
                            <li>Monday: Chest</li>
                            <li>Tuesday: Back</li>
                            <li>Wednesday: Rest</li>
                            <li>Thursday: Shoulders</li>
                            <li>Friday: Legs</li>
                            <li>Saturday: Arms (biceps and triceps)</li>
                            <li>Sunday: Rest</li>
                        </ol>
                        <ol>
                            <h5><strong>Science Split (Upper/Lower Split):</strong></h5>
                            <p>The Science Split, or Upper/Lower Split, divides workouts into upper body and lower body days. This approach increases training frequency, hitting each muscle group twice per week. Research suggests that increased training frequency can lead to greater muscle growth and strength gains, particularly for beginners. A typical Upper/Lower Split might look like this:</p>
                            <li>Monday: Upper Body (chest, back, shoulders, and arms)</li>
                            <li>Tuesday: Lower Body (legs and core)</li>
                            <li>Wednesday: Rest</li>
                            <li>Thursday: Upper Body (chest, back, shoulders, and arms)</li>
                            <li>Friday: Lower Body (legs and core)</li>
                            <li>Saturday: Rest</li>
                            <li>Sunday: Rest</li>
                        </ol>
                        <ol>
                            <h5><strong>Push-Pull-Legs (PPL) Split:</strong></h5>
                            <p>The Push-Pull-Legs split is a popular and versatile option that organizes workouts by movement patterns. Push exercises target the chest, shoulders, and triceps, while pull exercises focus on the back and biceps. Leg workouts engage the lower body, including the quadriceps, hamstrings, glutes, and calves. This split can be adapted for various training frequencies, but a common PPL schedule is:</p>
                            <li>Monday: Push (chest, shoulders, and triceps)</li>
                            <li>Tuesday: Pull (back and biceps)</li>
                            <li>Wednesday: Legs (quads, hamstrings, glutes, and calves)</li>
                            <li>Thursday: Rest</li>
                            <li>Friday: Push (chest, shoulders, and triceps)</li>
                            <li>Saturday: Pull (back and biceps)</li>
                            <li>Sunday: Legs (quads, hamstrings, glutes, and calves)</li>
                        </ol>
                        <ol>
                            <h5><strong>Arnold Split (Chest/Back, Legs/Shoulders, Arms):</strong></h5>
                            <p>The Arnold Split, named after Arnold Schwarzenegger, is a three-day split that increases training frequency while still allowing for high training volume. It typically follows a two-on, one-off pattern, cycling through the three workouts:</p>
                            <li>Day 1: Chest and Back</li>
                            <li>Day 2: Legs and Shoulders</li>
                            <li>Day 3: Rest</li>
                            <li>Day 4: Arms (biceps and triceps)</li>
                            <li>Day 5: Rest</li>
                            <li>Repeat</li>
                        </ol>
                        <ol>
                            <h5><strong>Custom Lower Body-Focused Split for Women:</strong></h5>
                            <p>For women looking to build shapely legs and a well-rounded posterior, a custom lower body-focused split can be designed. This split emphasizes lower body development while still incorporating upper body training. A sample schedule might look like this:</p>
                            <li>Monday: Glutes and Hamstrings</li>
                            <li>Tuesday: Upper Body (chest, back, and shoulders)</li>
                            <li>Wednesday: Rest</li>
                            <li>Thursday: Quadriceps and Calves</li>
                            <li>Friday: Upper Body (arms and core)</li>
                            <li>Saturday: Full-Body Glute and Leg Focus (compound movements and accessory exercises)</li>
                            <li>Sunday: Rest</li>
                        </ol>
                    </ol>
                    <p>When choosing a workout split, consider factors such as your goals, experience level, available time, and personal preferences. For beginners, starting with a higher frequency split, such as the Science Split or Push-Pull-Legs, is often recommended. As you progress, you may experiment with different splits to find what works best for your needs and goals.</p>
                    <p>Remember that your choice of exercises, workout intensity, progressive overload, and nutrition also play crucial roles in your fitness success. Regardless of the split you choose, ensure that you are consistently challenging your body, practicing proper form, and fueling your workouts with a balanced diet.</p>
                </div>
        </div>
    )
};
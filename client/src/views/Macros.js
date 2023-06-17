import React, { useState } from 'react';
import { Form, Button, Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function MacroCalculator() {
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [age, setAge] = useState('');
    const [activityLevel, setActivityLevel] = useState(1.2);
    const [gender, setGender] = useState('male');
    const [macros, setMacros] = useState(null);
    const [goal, setGoal] = useState('gain1');


    const handleSubmit = (e) => {
        e.preventDefault();
        const heightInInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
        const weightLbs = parseFloat(weight);
        const bmr =
            gender === 'male'
                ? 10 * weightLbs + 6.25 * heightInInches - 5 * age + 5
                : 10 * weightLbs + 6.25 * heightInInches - 5 * age - 161;
        const tdee = bmr * activityLevel;
    
        const protein = weightLbs * 1.2;
        const fat = (tdee * 0.25) / 9;
        let calories;
    
        switch (goal) {
            case 'gain1':
                calories = tdee + 500;
                break;
            case 'gain2':
                calories = tdee + 1000;
                break;
            case 'maintain':
                calories = tdee;
                break;
            case 'lose1':
                calories = tdee - 500;
                break;
            case 'lose2':
                calories = tdee - 1000;
                break;
            default:
                calories = tdee;
        }
    
        const carbs = (calories - (protein * 4) - (fat * 9)) / 4;
    
        setMacros({
            protein: Math.round(protein),
            fat: Math.round(fat),
            carbs: Math.round(carbs),
            calories: Math.round(calories),
        });
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
                <div>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="weight">
                    <Form.Label>Weight (lbs)</Form.Label>
                    <Form.Control
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group controlId="heightFeet">
                    <Form.Label>Height (Feet)</Form.Label>
                    <Form.Control
                        type="number"
                        name="heightFeet"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group controlId="heightInches">
                    <Form.Label>Height (Inches)</Form.Label>
                    <Form.Control
                        type="number"
                        name="heightInches"
                        value={heightInches}
                        onChange={(e) => setHeightInches(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="activityLevel">
                    <Form.Label>Activity Level</Form.Label>
                    <Form.Control
                        as="select"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                    >
                        <option value={1.2}>Sedentary (little to no exercise)</option>
                        <option value={1.375}>Lightly active (light exercise/sports 1-3 days a week)</option>
                        <option value={1.55}>Moderately active (moderate exercise/sports 3-5 days a week)</option>
                        <option value={1.725}>Very active (hard exercise/sports 6-7 days a week)</option>
                        <option value={1.9}>Extra active (very hard exercise/sports & physical job or training twice a day)</option>
                    </Form.Control>
                    </Form.Group>

                        <Form.Group controlId="goal">
                        <Form.Label>Goal</Form.Label>
                        <Form.Control as="select" value={goal} onChange={(e) => setGoal(e.target.value)}>
                            <option value="lose2">Lose 2 Pounds per Week</option>
                            <option value="lose1">Lose 1 Pound per Week</option>
                            <option value="maintain">Maintain Weight</option>
                            <option value="gain1">Gain 1 Pound per Week</option>
                            <option value="gain2">Gain 2 Pounds per Week</option>
                        </Form.Control>
                        </Form.Group>

                    <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        type="radio"
                        name="gender"
                        id="male"
                        label="Male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    />
                    <Form.Check
                        type="radio"
                        name="gender"
                        id="female"
                        label="Female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                        />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                        Calculate Macros
                        </Button>
                    </Form>
                
                    {macros && (
                        <Card className="mt-3">
                        <Card.Header>Macronutrient Breakdown</Card.Header>
                        <Card.Body>
                            <p>Protein: {macros.protein} g</p>
                            <p>Fat: {macros.fat} g</p>
                            <p>Carbohydrates: {macros.carbs} g</p>
                            <p>Calories: {macros.calories} g</p>
                        </Card.Body>
                        </Card>
                    )}
                </div>
        </div>
    );
    }
    
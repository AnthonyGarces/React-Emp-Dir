import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './header.css';


function Header() {
    return (
        <Jumbotron fluid className="header text-center">
            <Container fluid>
                <h1>Employee Directory</h1>
                <p>Click on carrots to filter by heading or use the search box</p>
            </Container>
        </Jumbotron>
    )
}

export default Header
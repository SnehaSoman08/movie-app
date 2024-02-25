import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary" style={{backgroundColor:"black"}}>
        <Container>
          <Navbar.Brand href="/" style={{textDecoration:"none",fontSize:"30px",color:"white"}}>
          <i class="fa-solid fa-clapperboard"></i>
            CineSpot
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
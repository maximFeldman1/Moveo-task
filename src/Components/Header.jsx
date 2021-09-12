import { Navbar, Container } from 'react-bootstrap'

const Header = () => {

    return (
        <Navbar bg="light" border="secondary">
            <Container>
                <Navbar.Brand href="#home">Moveo coding task - Loop machine</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Link: <a href="https://www.moveo.group/">Moveo Site</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
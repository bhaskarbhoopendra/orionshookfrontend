import { Container, Figure, Form, Nav, Navbar as NavbarBs } from "react-bootstrap";
import "../Styles/nav.css";
import { FaBell, FaCircle, FaSquare, FaSearch } from "react-icons/fa";

// import { useForm } from 'react-hook-form'

// import { Group_18 } from "../Navcomponent/group";


export function Navbar() {
    // const {Search} = useForm()  
    return (
        <>
            <>
                <div className="main" >
                    <NavbarBs expand="lg" >
                        <Container>
                            <FaSquare className="square" />


                            <NavbarBs.Brand href="/home" >
                            <Figure>
                                <Figure.Image
                                    
                                    alt="LOGO"
                                    src="logo.png"
                                />
                            </Figure>
                            </NavbarBs.Brand>
                            {/* <NavbarBs.Toggle aria-controls="basic-navbar-nav" /> */}
                            <NavbarBs.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    

                                    <Form  className="form" >
                                    <FaSearch className="search" />
                                        <Form.Control 
                                        type="search"
                                        placeholder="Search by Employee name with Designation or department"
                                        aria-label="Search"
                                        />

                                    </Form>

                                    {/* <Form className="d-flex">
                                        <Form.Control

                                            type="Search"
                                            placeholder="Search by Employee name with Designation or department"
                                            className="me-2"
                                            aria-label="Searc   h" />
                                    </Form> */}

                                    <FaBell className="bell" />
                                    <FaCircle className="circle" />
                                    

                                </Nav>
                            </NavbarBs.Collapse>
                        </Container>
                    </NavbarBs>
                </div>
            </></>
    );
}



{/* <i className="fa-regular fa-bell"></i> */ }

{/* <div>
    <FontAwesomeIcon icon="fa-regular fa-bell" />
    </div> */}

{/* <Button variant="outline-success">Search</Button> */ }


{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
        Another action
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
        Separated link
      </NavDropdown.Item>
    </NavDropdown> */}

function useForm(): { Search: any; } {
    throw new Error("Function not implemented.");
}

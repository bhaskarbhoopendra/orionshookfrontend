import { Container, Form, Nav, Navbar as NavbarBs } from "react-bootstrap";
import "../Styles/nav.css";
import { FaBell, FaCircle, FaSquare, FaSearch } from "react-icons/fa";



export function Navbar() {  
    return (
        
            <>
                <div className="main" >
                    <NavbarBs expand="lg" >
                        <Container>
                            <FaSquare className="square" />
                            <img
                                className="logo"
                                src="https://media-exp1.licdn.com/dms/image/C4E0BAQGeIUP3WV-37w/company-logo_200_200/0/1607729895661?e=1666224000&v=beta&t=jyYJdOttJYr8-qpBju6gUo45dgsEPit0MAtRCBRj8Jc"
                                alt="LOGO"
                            />
                            <NavbarBs.Brand href="/home" >
                            </NavbarBs.Brand>
                            <NavbarBs.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">

                                    <Form className="form" >
                                        {/* <FaSearch /> */}
                                        <Form.Control
                                            className="search"
                                            type="search"
                                            placeholder="Search by Employee name with Designation or department"
                                            style={{ border: "none", borderBottom: "0.5px solid black" }}
                                            // aria-label="Search"
                                        />
                                    </Form>

                                    <FaBell className="bell" />
                                    <FaCircle className="circle" />
                                </Nav>
                            </NavbarBs.Collapse>
                        </Container>
                    </NavbarBs>
                </div>
            </>
    );
}
function useForm(): { Search: any; } {
    throw new Error("Function not implemented.");
}

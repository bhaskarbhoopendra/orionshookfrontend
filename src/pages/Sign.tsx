import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { ButtonComponent } from "../basecomponents/Button";
// import { InputComponent } from "../basecomponents/Inputcomponent";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "../Styles/sign.css";
// import { InputComponent } from "../basecomponents/inputcomponent";

export function Sign() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handleChange = (e: any) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }

    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
    if (e.target.id === "confirmpassword") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ email, password, confirmpassword });
  };

  return (
    <>
      <Row>
        <Col xl={5} lg={4} md={4} sm={4} className="contain1">
          <Container className="mr-60 p-5 w-40">
            <h2 className="welcome">WelcomeBack!</h2>
            <h5 className="text">
              To keep connected with us please login with your personal info
            </h5>
            <div className="butt1">
              <ButtonComponent text="SignIn" />
            </div>
          </Container>
        </Col>

        <Col xl={7} lg={8} md={8} sm={8}>
          <Container className="mr-50 p-5 w-50">
            <h1 className="head">Orions Hooks</h1>
            <h3 className="subhead">Create Account</h3>
            <Form className="form">
              <Form.Group className="mb-3 " controlId="email">
                {/* <Form.Label>Email address</Form.Label> */}

                <div className="d-flex">
                  <FaUser className="fs-2 " />
                  {/* <InputComponent /> */}
                  <Form.Control
                    className="mail"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                {/* <Form.Label>Password</Form.Label> */}
                {/* <InputComponent /> */}
                <div className="d-flex">
                  <FaLock className="fs-2" />
                  <Form.Control
                    className="mail"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmpassword">
                {/* <Form.Label>Confirm Password</Form.Label> */}
                {/* <InputComponent /> */}
                <div className="d-flex">
                  <FaLock className="fs-2" />
                  <Form.Control
                    className="mail"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
              </Form.Group>
              <ButtonComponent text="SignUp" />
            </Form>
            <footer className="heart">
              <p>
                Made with <FaHeart style={{ color: "red" }} /> at Orions IT
                Solutions
              </p>
            </footer>
          </Container>
        </Col>
      </Row>
    </>
  );
}

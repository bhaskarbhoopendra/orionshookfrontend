import { Col, Container, Row, Form } from "react-bootstrap";
import { ButtonComponent } from "../basicComponents/button";
import { InputComponent } from "../basicComponents/inputComponent";
// import { IconName } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "../styles/signin.css";
import { useFormik } from "formik";

const validate = (values: any) => {
  const errors = {} as any;

  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (values.email.length > 15) {
  //     errors.firstName = "Must be 15 characters or less";
  //   }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export function Signin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      console.log(JSON.parse(data));
    },
  });
  return (
    <>
      <Row className="ctn">
        <Col xl={8} lg={8} md={8} sm={8}>
          <Container className="vh-100 p-5 w-50 d-flex justify-content-between align-items-center flex-column ">
            <header>
              <h1 className="hook-1">OrionsHook</h1>
              <h3 className="hook-2">Sign In</h3>
            </header>
            <Container className="mr-50 p-5">
              <Form
                className="d-flex justify-content-center align-items-center flex-column"
                onSubmit={formik.handleSubmit}
              >
                <section>
                  <div className="test-1">
                    <FaUser style={{ fontSize: "20px" }} />
                    <Form.Control
                      className="nofocus"
                      style={{
                        border: "none",
                        borderBottom: "0.5px solid black",
                        borderRadius: 0,
                      }}
                      id="email"
                      // className="fs-3"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>
                        <br />
                        <div className="errorsText">{formik.errors.email}</div>
                      </div>
                    ) : null}
                  </div>
                  <div className="test-1">
                    <FaLock style={{ fontSize: "20px" }} />
                    <Form.Control
                      style={{
                        border: "none",
                        borderBottom: "0.5px solid black",
                        borderRadius: 0,
                      }}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="errorsText">{formik.errors.password}</div>
                    ) : null}
                  </div>
                </section>
                <button className="mybutton" type="submit">
                  Submit
                </button>
              </Form>
              <p className="hook-3">Forgot your password?</p>
            </Container>
            {/* <Container className="input mr-50 p-5">
              <div>
                <FaUser />{" "}
                <InputComponent
                  typeOfInput="text"
                  inputName="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <FaLock />{" "}
                <InputComponent
                  typeOfInput="password"
                  inputName="password"
                  placeholder="Password"
                />
              </div>
            </Container> */}

            <footer className="hook-4">
              Made with <FaHeart style={{ color: "red" }} /> at Orions IT
              Solutons
            </footer>
          </Container>
        </Col>

        {/* Secod column starts here */}
        <Col xl={4} lg={4} md={4} sm={4} className="column-2">
          <Container className="p-1 w-50">
            <section>
              <p className="hook-5">Hello, Friend!</p>
              <p className="hook-6">
                Enter your personal details and start journey with us
              </p>
            </section>
            <button className="mybutton">Sign Up</button>
          </Container>
        </Col>
      </Row>
    </>
  );
}

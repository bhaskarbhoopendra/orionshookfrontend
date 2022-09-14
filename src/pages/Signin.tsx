import { Col, Container, Row, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "../Styles/signin.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validate = (values: any) => {
  const errors = {} as any;

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
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      console.log(JSON.parse(data));
      navigate("/forms");
    },
  });
  return (
    <>
      {/* <Container> */}
      <Row className="vw-100">
        <Col xl={8} lg={8} md={7} sm={12}>
          <Container className="vh-100 p-5 w-50 d-flex justify-content-between align-items-center flex-column ">
            <header>
              <h1 style={{ font: "normal normal bold 40px/40px Helvetica" }}>
                OrionsHook
              </h1>
              <br />
              <br />
              <h3 className="hook-2">Sign In</h3>
            </header>
            <Container className="mt-5">
              <Form
                className="d-flex justify-content-center align-items-center flex-column"
                onSubmit={formik.handleSubmit}
              >
                <section className="d-flex flex-column">
                  <Form.Group className="d-flex justify-content-end align-items-center">
                    <FaUser className="col-lg-5" style={{ fontSize: "30px" }} />
                    <Form.Control
                      className="nofocus col-lg-5"
                      style={{
                        border: "none",
                        borderBottom: "0.5px solid black",
                        borderRadius: 0,
                      }}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    {formik.touched.email && formik.errors.email ? (
                      <div className="errorsText">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <br />
                  <Form.Group className="d-flex justify-content-end align-items-center">
                    <FaLock className="col-lg-5" style={{ fontSize: "25px" }} />
                    <Form.Control
                      className="col-lg-5"
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
                  </Form.Group>
                  <div className="d-flex justify-content-center ">
                    {formik.touched.password && formik.errors.password ? (
                      <div className="errorsText">{formik.errors.password}</div>
                    ) : null}
                  </div>
                </section>
                <button className="mybutton" type="submit">
                  Submit
                </button>
              </Form>
            </Container>
            <p className="hook-3">Forgot your password?</p>

            <footer>
              Made with <FaHeart style={{ color: "red" }} /> at Orions IT
              Solutons
            </footer>
          </Container>
        </Col>

        {/* Second column starts here */}

        <Col xl={4} lg={4} md={5} sm={12} className="second-col">
          <Container className="pt-5 mt-5 d-flex align-items-center flex-column justify-content-center">
            <section>
              <p
                className="d-flex justify-content-center"
                style={{
                  font: "normal normal bold 30px/37px Helvetica",
                  color: "#f5f9fb",
                }}
              >
                Hello, Friend!
              </p>
              <p className="comment">
                Enter your personal details and start journey with us
              </p>
            </section>
            <section className="d-flex align-items-end">
              <a href="/signup">
                <button className="mybutton">Sign Up</button>
              </a>
            </section>
          </Container>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
}

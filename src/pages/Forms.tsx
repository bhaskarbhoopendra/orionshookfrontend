import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi";
import ButtonComponent from "../baseCompo/Button";
import "../styles/formstyles.css"

const initialValues = {
      employeeID: "",
      department: "",
      doj: "",
      ecn: "",
      email: "",
      location: "",
      bloodGroup: "",
      salutation: "",
      firstName: "",
      nationality: "",
      dob: "",
      gender: "",
      lastName: "",
      religion: "",
      maritalStatus: ""
}

const onSubmit = (values: any) => {
    const data = JSON.stringify(values, null, 2);
    console.log(JSON.parse(data));
  }

const validate = (values: any) => {
    const errors = {} as any

    if (!values.employeeID) {
        errors.employeeID = "Required!"
    }

    if (!values.department) {
        errors.department = "Required!"
    }

    if (!values.doj) {
        errors.doj = "Required!"
    }

    if (!values.ecn) {
        errors.ecn = "Required!"
    }

    if (!values.email) {
              errors.email = "Required!"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = "Invalid email address!"
            }

    if (!values.location) {
        errors.location = "Required!"
    }

    if (!values.bloodGroup) {
        errors.bloodGroup = "Required!"
    }

    if (!values.salutation) {
        errors.salutation = "Required!"
    }

    if (!values.firstName) {
        errors.firstName = "Required!"
    }
    
    if (!values.nationality) {
        errors.nationality = "Required!"
    }
    if (!values.dob) {
        errors.dob = "Required!"
    }

    if (!values.gender) {
        errors.gender = "Required!"
    }

    if (!values.lastName) {
        errors.lastName = "Required!"
    }

    if (!values.religion) {
        errors.religion = "Required!"
    }

    if (!values.maritalStatus) {
        errors.maritalStatus = "Required!"
    }

    return errors
}
export default function Forms() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <>
      <Container className="firstctn pt-5 pb-5 vw-100 container-fluid ">
        <Container className="secondctn gx-5 pb-5 pt-2">
          <Form onSubmit={formik.handleSubmit}>
            <br/>
            <Container>
              <div className="d-flex">
                <h1 className="head"><HiArrowLeft style={{ fontSize: "40px" }}/> Personal Information and Biographical</h1>
              </div>
            </Container>
            <hr/>
            <br/>
            <br/>
            <Container>
              <h1 className="sub">Personal Information</h1>
            </Container>
            <Container className="p-5">
              <Row>
                <Col className="left-col">
                  <Container>
                    <Form.Group>
                      <Form.Label className="lbl">Employee ID</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.employeeID}
                        id="employeeID"
                        name="employeeID"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                      {formik.touched.employeeID && formik.errors.employeeID ? (
                        <div className="errorsText">
                            {formik.errors.employeeID}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Department</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.department}
                        id="department"
                        name="department"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.department && formik.errors.department ? (
                        <div className="errorsText">
                            {formik.errors.department}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Date Of Joining</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.doj}
                        id="doj"
                        name="doj"
                        type="date"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.doj && formik.errors.doj ? (
                        <div className="errorsText">
                            {formik.errors.doj}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Emergency Contact Number</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ecn}
                        id="ecn"
                        name="ecn"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.ecn && formik.errors.ecn ? (
                        <div className="errorsText">
                            {formik.errors.ecn}
                        </div>
                      ) : null}
                  </Container>
                </Col>
                <Col className="right-col">
                  <Container >
                    <Form.Group>
                      <Form.Label className="lbl">Email ID</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        id="email"
                        name="email"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="errorsText">
                            {formik.errors.email}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Current Office Location</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                        id="location"
                        name="location"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.location && formik.errors.location ? (
                        <div className="errorsText">
                            {formik.errors.location}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Blood Group</Form.Label>
                      <Form.Select
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bloodGroup}
                        id="bloodGroup"
                        name="bloodGroup"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      >
                        <option>Choose Below</option> //disable choose below
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        </Form.Select>
                    </Form.Group>
                    {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                        <div className="errorsText">
                            {formik.errors.bloodGroup}
                        </div>
                      ) : null}
                  </Container>
                </Col>
              </Row>
            </Container>
            <br />
            <Container>
              <h1 className="sub">Biographical</h1>
            </Container>
            <Container className="p-5">
              <Row>
                <Col className="left-col">
                  <Container >
                    <Form.Group>
                      <Form.Label className="lbl">Salutation</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.salutation}
                        id="salutation"
                        name="salutation"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.salutation && formik.errors.salutation ? (
                        <div className="errorsText">
                            {formik.errors.salutation}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">First Name</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        id="firstName"
                        name="firstName"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="errorsText">
                            {formik.errors.firstName}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Nationality</Form.Label>
                      <Form.Select
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nationality}
                        id="nationality"
                        name="nationality"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      >
                        <option>Choose Below</option>
                        <option>Indian</option>
                        <option>Foreign</option>
                        </Form.Select>
                    </Form.Group>
                    {formik.touched.nationality && formik.errors.nationality ? (
                        <div className="errorsText">
                            {formik.errors.nationality}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Date Of Birth</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dob}
                        id="dob"
                        name="dob"
                        type="date"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.dob && formik.errors.dob ? (
                        <div className="errorsText">
                            {formik.errors.dob}
                        </div>
                      ) : null}
                  </Container>
                </Col>
                <Col className="right-col">
                  <Container >
                    <Form.Group>
                      <Form.Label className="lbl">Gender</Form.Label>
                      <Form.Select
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                        id="gender"
                        name="gender"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                          >
                          <option>Choose Below</option>
                           <option>Male</option>
                           <option>Female</option>
                           <option>Trans</option>
                      </Form.Select>
                    </Form.Group>
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="errorsText">
                            {formik.errors.gender}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Last Name</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        id="lastName"
                        name="lastName"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="errorsText">
                            {formik.errors.lastName}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Religion</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.religion}
                        id="religion"
                        name="religion"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0,
                          }}
                      />
                    </Form.Group>
                    {formik.touched.religion && formik.errors.religion ? (
                        <div className="errorsText">
                            {formik.errors.religion}
                        </div>
                      ) : null}
                    <Form.Group>
                      <Form.Label className="lbl">Marital Status</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.maritalStatus}
                        id="maritalStatus"
                        name="maritalStatus"
                        type="text"
                        style={{
                            border: "none",
                            borderBottom: "0.5px solid black",
                            borderRadius: 0
                          }}
                      />
                    </Form.Group>
                    {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
                        <div className="errorsText">
                            {formik.errors.maritalStatus}
                        </div>
                      ) : null}
                  </Container>
                </Col>
              </Row>
            </Container>
            <br />
            <div className="d-flex justify-content-center">
              <ButtonComponent type="submit" text={"Proceed"} />
            </div>
          </Form>
        </Container>
        </Container>
    </>
  )
}

import { Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi";
import ButtonComponent from "../baseCompo/Button";
import InputFormikComponent from "../baseCompo/InputFormik";

export default function Forms() {
  return (
    <>
    <Formik
    initialValues={{
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
        }}
        onSubmit={(values) => {
         alert(JSON.stringify(values))
        }}
        >
            {({handleSubmit}) => (

    <Container className='firstctn w-0'>
    <Container className='secondctn' >
        <form onSubmit={handleSubmit}>
        
      <Container>
        <div className='d-flex justify-baseline'>
      <HiArrowLeft style={{fontSize: "50px"}}/>
      <h1 className='head'>Personal Information and Biographical</h1>
      </div>
      </Container>
      <hr/>
      <br/>
      <br/>
      <Container>
    <h2 className='head'>Personal Information</h2>
    </Container>
    <Container className='p-5'>
      <Row>
        <Col className='left-col'>
          <Container className='padder'>
             <InputFormikComponent name="employeeID" label="Employee ID" type="text"/>
             <InputFormikComponent name="department" label="Department" type="text"/>
             <InputFormikComponent name="doj" label="Date Of Joining" type="date"/>
             <InputFormikComponent name="ecn" label="Emergency Contact Number" type="text"/>
            </Container>
        </Col>
         <Col className='right-col'>
         <Container className='padder'>
             <InputFormikComponent name="email" label="Email ID" type="text"/>
             <InputFormikComponent name="location" label="Current Office Location" type="text"/>
             <InputFormikComponent name="bloodGroup" label="Blood Group" type="text"/>
            </Container> 
        </Col>
      </Row>
      </Container>
      <br/>
      <Container>
    <h2 className='head'>Biographical</h2>
    </Container>
    <Container className='p-5'>
      <Row>
        <Col className='left-col'>
          <Container className='padder'>
             <InputFormikComponent name="salutation" label="Salutation" type="text"/>
             <InputFormikComponent name="firstName" label="First Name" type="text"/>
             <InputFormikComponent name="nationality" label="Nationality" type="text"/>
             <InputFormikComponent name="dob" label="Date Of Birth" type="date"/>
            </Container>
        </Col>
         <Col className='right-col'>
         <Container className='padder'>
             <InputFormikComponent name="gender" label="Gender" type="text"/>
             <InputFormikComponent name="lastName" label="Last Name" type="text"/>
             <InputFormikComponent name="religion" label="Religion" type="text"/>
             <InputFormikComponent name="maritalStatus" label="Marital Status" type="text"/>
            </Container> 
        </Col>
      </Row>
      </Container>
    <br/>
    <div className='d-flex justify-content-center'>
    <ButtonComponent onSubmit={handleSubmit} text={"Next Page"}/>
    </div>
    </form>
    </Container>
    </Container>
            )}
        </Formik>
    </>
  )
}

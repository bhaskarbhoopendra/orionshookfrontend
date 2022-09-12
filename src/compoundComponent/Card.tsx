import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import ButtonComponent from '../baseCompo/Button'
import InputComponent from '../baseCompo/Input'
import "../baseCompo/styles.css"
import { HiArrowLeft } from 'react-icons/hi'


export default function CardComponent() {
  const [value, setValue] = useState('');
  const [obj,setObj] =useState({
    employeeId:"",
    department:"",
    dateOfJoining:"",
    emergencyContactNumber:"",
    emailID:"",
    currentOfficeLocation:"",
    bloodGroup:"",
    salutaion:"",
    firstName:"",
    nationality:"",
    dateOfBirth:"",
    gender:"",
    lastName:"",
    religion:"",
    maritalStatus:""
  })
  const globalArr = [] as any

  function handleChange(e: any) {
    setValue(e.target.value);
    console.log(e.target.value)
    globalArr.push(e.target.value)
  }

  const handleSubmit= () => {
   
  }
  return (
    <>
    <Container className='firstctn w-0'>
    <Container className='secondctn' >
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
             <InputComponent label="Employee ID" type="text" fn={handleChange}/>
             <InputComponent label="Department" fn={handleChange} type="text"/>
             <InputComponent label="Date Of Joining" type="date"/>
             <InputComponent label="Emergency Contact Number" type="text"/>
            </Container>
        </Col>
         <Col className='right-col'>
         <Container className='padder'>
             <InputComponent label="Email ID" type="text"/>
             <InputComponent label="Current Office Location" type="text"/>
             <InputComponent label="Blood Group" type="text"/>
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
             <InputComponent label="Salutation" type="text"/>
             <InputComponent label="First Name" type="text"/>
             <InputComponent label="Nationality" type="text"/>
             <InputComponent label="Date Of Birth" type="date"/>
            </Container>
        </Col>
         <Col className='right-col'>
         <Container className='padder'>
             <InputComponent label="Gender" type="text"/>
             <InputComponent label="Last Name" type="text"/>
             <InputComponent label="Religion" type="text"/>
             <InputComponent label="Marital Status" type="text"/>
            </Container> 
        </Col>
      </Row>
      </Container>
    <br/>
    <div className='d-flex justify-content-center'>
    <ButtonComponent  text={"Next Page"}/>
    </div>
    </Container>
    </Container>
    </>
  )
}

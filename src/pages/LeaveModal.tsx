import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../styles/btnstyles.css"
import "../styles/modal.css"

const initialValues = {
  req: "",
  res: "",
  sdf: "",
  sdt: "",
  location: "",
  onc: "",
  cit: "",
  cot: "",
  break: "",
  msg: "",
  atm: ""
}

const onSubmit = (values: any) => {
const data = JSON.stringify(values, null, 2);
console.log(JSON.parse(data));
}

const validate = (values: any) => {
const errors = {} as any

if (!values.req) {
    errors.req = "Required!"
}

if (!values.res) {
    errors.res = "Required!"
}

if (!values.sdf) {
    errors.sdf = "Required!"
}

if (!values.sdt) {
    errors.sdt = "Required!"
}

if (!values.location) {
    errors.location = "Required!"
}

if (!values.onc) {
    errors.onc = "Required!"
}

if (!values.cit) {
    errors.cit = "Required!"
}

if (!values.cot) {
    errors.cot = "Required!"
}

if (!values.break) {
    errors.break = "Required!"
}

if (!values.msg) {
    errors.msg = "Required!"
}
if (!values.atm) {
    errors.atm = "Required!"
}
return errors
}

export default function LeaveForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='bttn' onClick={handleShow}>
        Apply
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='header'>Attendance Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label className="lbl">Request Type</Form.Label>
              <Form.Select
               id="req"
               name="req"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.req}
              >
                <option value="" disabled>Attendance Request</option>  
                <option>Request 1</option>
                <option>Request 2</option>
                <option>Request 3</option>
              </Form.Select>
            </Form.Group>
            {formik.touched.req && formik.errors.req ? (
                        <div className="errorsText">
                            {formik.errors.req}
                        </div>
                      ) : null}
            <br/>
            <Form.Group >
              <Form.Label className="lbl">Reason for attendance request</Form.Label>
              <Form.Select
               id="res"
               name="res"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.res}
              >
                <option value="" disabled>Select Reason</option>  
                <option>Reason 1</option>
                <option>Reason 2</option>
                <option>Reason 3</option>
              </Form.Select>
            </Form.Group>
            {formik.touched.res && formik.errors.res ? (
                        <div className="errorsText">
                            {formik.errors.res}
                        </div>
                      ) : null}
            <br/>
            <Form.Group>
            <Container>
          <Row>
            <Col xs={6} md={6}>
            <Form.Group>
                      <Form.Label className="lbl">Shift Date From</Form.Label>
                      <Form.Control
                        id="sdf"
                        name="sdf"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sdf}
                      />
                    </Form.Group>
                    {formik.touched.sdf && formik.errors.sdf ? (
                        <div className="errorsText">
                            {formik.errors.sdf}
                        </div>
                      ) : null}
            </Col>
            <Col xs={6} md={6}>
            <Form.Group>
                      <Form.Label className="lbl">Shift Date To</Form.Label>
                      <Form.Control
                        id="sdt"
                        name="sdt"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sdt}
                      />
                    </Form.Group>
                    {formik.touched.sdt && formik.errors.sdt ? (
                        <div className="errorsText">
                            {formik.errors.sdt}
                        </div>
                      ) : null}
            </Col>
          </Row>
          </Container>
          </Form.Group>
          
         
          <br/>
            <Form.Group>
              <Form.Label className="lbl">Location</Form.Label>
              <Form.Select
               id="location"
               name="location"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.location}
              >
                <option value="" disabled>Select</option>  
                <option>Office</option>
                <option>Remote</option>
                <option>WFH</option>
              </Form.Select>
            </Form.Group>
            {formik.touched.location && formik.errors.location ? (
                        <div className="errorsText">
                            {formik.errors.location}
                        </div>
                      ) : null}
            <br/>
            <Form.Group>
                      <Form.Label className='lbl2'>Overnight Clockout ?</Form.Label>
                      <br/>
                      <div className='lbl'>
                      <input
                        id="onc"
                        name="onc"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.onc}
                      />
                      is Clockout time after 00:00
                      midnight no next date?
                      </div>
                    </Form.Group>
                    {formik.touched.onc && formik.errors.onc ? (
                        <div className="errorsText">
                            {formik.errors.onc}
                        </div>
                      ) : null}
                    <br/>
                    <Form.Group>
                      <Form.Label className="lbl">Clockin Time</Form.Label>
                      <Form.Control
                        id="cit"
                        name="cit"
                        type="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cit}
                      />
                    </Form.Group>
                    {formik.touched.cit && formik.errors.cit ? (
                        <div className="errorsText">
                            {formik.errors.cit}
                        </div>
                      ) : null}
                    <br/>
                    <Form.Group>
                      <Form.Label className="lbl">Clockout Time</Form.Label>
                      <Form.Control
                        id="cot"
                        name="cot"
                        type="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cot}
                      />
                    </Form.Group>
                    {formik.touched.cot && formik.errors.cot ? (
                        <div className="errorsText">
                            {formik.errors.cot}
                        </div>
                      ) : null}
                    <br/>
                    <Form.Group>
                      <Form.Label className="lbl">Break Duration</Form.Label>
                      <Form.Control
                        id="break"
                        name="break"
                        type="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.break}
                      />
                    </Form.Group>
                    {formik.touched.break && formik.errors.break ? (
                        <div className="errorsText">
                            {formik.errors.break}
                        </div>
                      ) : null}
                    <br/>
            <Form.Group>
              <Form.Label className="lbl">Message</Form.Label>
              <Form.Control id="msg" name="msg" as="textarea" rows={3} onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.msg} />
            </Form.Group>
            {formik.touched.msg && formik.errors.msg ? (
                        <div className="errorsText">
                            {formik.errors.msg}
                        </div>
                      ) : null}
            <br/>
            <Form.Group>
                      <Form.Label className="lbl2">Attachments</Form.Label>
                      <Form.Control
                        id="atm"
                        name="atm"
                        type="file"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.atm}
                      />
                    </Form.Group>
                    {formik.touched.atm && formik.errors.atm ? (
                        <div className="errorsText">
                            {formik.errors.atm}
                        </div>
                      ) : null}
                      <br/>
                      <Container className='d-flex justify-content-end'>
            <button className='close me-2' onClick={handleClose}>
            <div className='btntxt'>
            CLOSE
            </div>
          </button>
          <button className='subbtn ' type='submit'>
          <div className='subtxt'>
            SUBMIT
            </div>
            </button>
           </Container>
          </Form>
        </Modal.Body>
        </Modal>
    </>
  );
}


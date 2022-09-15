import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../styles/btnstyles.css"
import "../styles/modal.css"

export default function LeaveForm() {
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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="lbl">Request Type</Form.Label>
              <Form.Select
               id="req"
               name="req"
              >
                <option value="" disabled selected>Attendance Request</option>  
                <option>Request 1</option>
                <option>Request 2</option>
                <option>Request 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="lbl">Reason for attendance request</Form.Label>
              <Form.Select
               id="req"
               name="req"
              >
                <option value="" disabled selected>Select Reason</option>  
                <option>Reason 1</option>
                <option>Reason 2</option>
                <option>Reason 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
            <Container>
          <Row>
            <Col xs={6} md={4}>
            <Form.Group>
                      <Form.Label className="lbl">Shift Date From</Form.Label>
                      <Form.Control
                        id="sdf"
                        name="sdf"
                        type="date"
                      />
                    </Form.Group>
            </Col>
            <Col xs={6} md={4}>
            <Form.Group>
                      <Form.Label className="lbl">Shift Date To</Form.Label>
                      <Form.Control
                        id="sdt"
                        name="sdt"
                        type="date"
                      />
                    </Form.Group>
            </Col>
          </Row>
          </Container>
          </Form.Group>
          <br/>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="lbl">Location</Form.Label>
              <Form.Select
               id="loc"
               name="loc"
              >
                <option value="" disabled selected>Select</option>  
                <option>Office</option>
                <option>Remote</option>
                <option>WFH</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
                      <Form.Label className='lbl2'>Overnight Clockout ?</Form.Label>
                      <br/>
                      <div className='lbl'>
                      <input
                        id="onc"
                        name="onc"
                        type="checkbox"
                      />
                      is Clockout time after 00:00
                      midnight no next date?
                      </div>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                      <Form.Label className="lbl">Clockin Time</Form.Label>
                      <Form.Control
                        id="cit"
                        name="cit"
                        type="time"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="lbl">Clockout Time</Form.Label>
                      <Form.Control
                        id="cot"
                        name="cot"
                        type="time"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="lbl">Break Duration</Form.Label>
                      <Form.Control
                        id="brk"
                        name="brk"
                        type="time"
                      />
                    </Form.Group>
                    <br/>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="lbl">Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
                      <Form.Label className="lbl2">Attachments</Form.Label>
                      <Form.Control
                        id="atm"
                        name="atm"
                        type="file"
                      />
                    </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='close' onClick={handleClose}>
            <div className='btntxt'>
            CLOSE
            </div>
          </button>
          <button className='subbtn' onClick={handleClose}>
            <div className='subtxt'>
            SUBMIT
            </div>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


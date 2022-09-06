import { Button, Container, Form, FormGroup } from "react-bootstrap";

export function Sign() {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phonenumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </Container>
    </>
  );
}

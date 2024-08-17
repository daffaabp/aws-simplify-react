import { Button, Col, Container, Image, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src="/img/logo.png" fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Contacts App</h1>
          <p className="mt-4">
            Lorem Ipsum
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque, quam, sint velit similique itaque quo ut nihil a aspernatur quis corporis sequi maiores ipsum nam debitis ipsa consectetur. Consequatur veniam illum vero tenetur soluta, nesciunt tempore ea culpa fuga quas dolore reprehenderit voluptas, quidem dolor eaque quibusdam, itaque laboriosam.
          </p>
          <Button variant="outline-primary">Get Started &gt;&gt;</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;
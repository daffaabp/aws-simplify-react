import { Card, Col, Container, Row } from "react-bootstrap";

function Contacts() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <h1>Contacts</h1>
      </Row>
      <Row>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="/img/contact_1.png" />
            <Card.Body>
              <Card.Title>Daffa Budi Prasetya</Card.Title>
              <Card.Text>
                daffa@gmail.com
                <br /> 555.123.4567
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="/img/contact_2.png" />
            <Card.Body>
              <Card.Title>Daffa Budi Prasetya</Card.Title>
              <Card.Text>
                daffa@gmail.com
                <br /> 555.123.4567
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="/img/contact_3.png" />
            <Card.Body>
              <Card.Title>Daffa Budi Prasetya</Card.Title>
              <Card.Text>
                daffa@gmail.com
                <br /> 555.123.4567
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contacts;
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image12 from "../assets/imgs/saw.jpg";
import Image13 from "../assets/imgs/wood cutter.jpg";
import Image14 from "../assets/imgs/stereosystem.jpg";
import BigImage from "../assets/imgs/Tracktor.jpg";
import "../pages/AuctionsOnFirstPage/auctionsOnMainPage.css";

const AuctionsCardsOnMain = () => {
  return (
    <Container>
      <Row className="card-row">
        <Col xs={6} md={3}>
          <Card>
            <Card.Img variant="top" src={Image12} />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is a small card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card>
            <Card.Img variant="top" src={Image13} />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is a small card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card>
            <Card.Img variant="top" src={Image14} />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is a small card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="big-card">
          <Card>
            <Card.Img variant="top" src={BigImage} />
            <Card.Body>
              <Card.Title>Big Card</Card.Title>
              <Card.Text>This is a bigger card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuctionsCardsOnMain;

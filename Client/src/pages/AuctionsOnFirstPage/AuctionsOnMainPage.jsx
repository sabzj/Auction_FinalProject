import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./auctionsOnMainPage.css";
import img10 from "../assets/imgs/bread slicer.jpg";
import img11 from "../assets/imgs/circular saw.jpg";
import img12 from "../assets/imgs/cleaning machine.jpg";
import img13 from "../assets/imgs/corn harvest.jpg";
import img14 from "../assets/imgs/farm truck.jpg";
import img15 from "../assets/imgs/fork lift.jpg";
import img16 from "../assets/imgs/genie lift.jpg";

const AuctionsCardsOnMain = () => {
  const cards = [
    {
      title: "Bread Slicer",
      text: "used with a fair starting price.",
      imageSrc: img10,
    },
    { title: "Circular saw", text: "availabe in the stock", imageSrc: img11 },
    {
      title: "cleaning machine",
      text: "used machine in good condition.",
      imageSrc: img12,
    },
    {
      title: "corn harvest",
      text: "in good working condition",
      imageSrc: img13,
    },
    { title: "farm Truck", text: "in good working condition", imageSrc: img14 },
    { title: "fork lift", text: "in good working condition", imageSrc: img15 },
    { title: "genie lift", text: "in good working condition", imageSrc: img16 },
  ];

  return (
    <Container>
      <Row className="card-row">
        {cards.map((card, index) => (
          <Col
            key={index}
            xs={6}
            md={3}
            className={index === 3 ? "big-card" : ""}
          >
            <Card>
              <Card.Img
                variant="top"
                src={card.imageSrc}
                alt={`Image for ${card.title}`}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AuctionsCardsOnMain;

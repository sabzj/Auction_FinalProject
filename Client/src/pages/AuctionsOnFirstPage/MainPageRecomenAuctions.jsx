import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/imgs/BMW.jpg";
import img2 from "../assets/imgs/Jeep.jpg";
import img3 from "../assets/imgs/Jeep2.jpg";
import "./mainRecommendAuctions.css";

function GroupRecommendAuctions() {
  const [timer, setTimer] = useState(48 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 48 * 60 * 60 * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  const handleViewDetails = (title) => {
    alert(`View Details for: ${title}`);
  };

  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Current Bid</Card.Title>
          <Card.Text>Sport and strong product for bidding</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Countdown: {formatTime(timer)}</small>
          <button
            className="btn btn-primary"
            onClick={() => handleViewDetails("Card title")}
          >
            View Details
          </button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Current Bid</Card.Title>
          <Card.Text>Elegant Car available for Bits </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Countdown: {formatTime(timer)}</small>
          <button
            className="btn btn-primary"
            onClick={() => handleViewDetails("Elegant Car")}
          >
            View Details
          </button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Current Bid</Card.Title>
          <Card.Text>This is a top recommended bid for a good price</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Countdown: {formatTime(timer)}</small>
          <button
            className="btn btn-primary"
            onClick={() => handleViewDetails("Card title")}
          >
            View Details
          </button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupRecommendAuctions;

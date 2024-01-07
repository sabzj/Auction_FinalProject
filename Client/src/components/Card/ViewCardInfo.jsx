import React from "react";
import { useParams } from "react-router-dom";

const ViewCardInfo = ({ cardData }) => {
  const { cardId } = useParams();
  const selectedCard = cardData.find(
    (card) => card.id === parseInt(cardId, 10)
  );

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <h2>{selectedCard.title}</h2>
      <img src={selectedCard.img} alt={selectedCard.title} />
      <p>{selectedCard.details}</p>
    </div>
  );
};

export default ViewCardInfo;

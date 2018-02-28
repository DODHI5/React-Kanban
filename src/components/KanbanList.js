import React from "react";
import CardListItem from "./KanbanListItem";

const CardList = ({ cards, idx }) => {
  console.log("Cards               ", cards);
  const cardsListContent = cards.map(card => {
    return (
      <CardListItem
        key={card.id}
        title={card.title}
        priority={card.priority}
        status={card.status}
        created_by={card.created_by}
        assigned_to={card.assigned_to}
      />
    );
  });
  return <ul className="cards-list"> {cardsListContent} </ul>;
};

export default CardList;

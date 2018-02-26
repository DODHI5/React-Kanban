import React from "react";
import CardListItem from "./KanbanListItem";

const CardList = ({ cards, cardClickHandler }) => {
  console.log("clickhandler", cardClickHandler);
  const CardListContent = cards.map((card, idx) => {
    return (
      <CardListItem key={idx} {...card} cardClickHandler={cardClickHandler} />
    );
  });

  return <ul className="cards-list"> {CardListContent} </ul>;
};

export default CardList;

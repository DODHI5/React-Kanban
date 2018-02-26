import React from "react";

export const ActiveCard = ({ card }) => {
  return (
    <div className="active-card">
      {card.name ? (
        <div className="card">
          <div className="attribute">
            <span>Title: </span>
            {card.title}
          </div>
          <div className="attribute">
            <span>Priority: </span>
            {card.priority}
          </div>
          <div className="attribute">
            <span>Status </span>
            {card.status}
          </div>
          <div className="attribute">
            <span>Created By </span>
            {card.created_by}
          </div>
          <div className="attribute">
            <span>Assigned To </span>
            {card.assigned_to}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ActiveCard;

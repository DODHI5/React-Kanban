import React from "react";

const CardListItem = props => {
  console.log("CardlistitemsProps     ", props);
  return (
    <li data-card-title={props.title}>
      <div className="card">
        <div className="attribute">
          <span>Title: </span>
          {props.title}
        </div>
        <div className="attribute">
          <span>Priority: </span>
          {props.priority}
        </div>
        <div className="attribute">
          <span>Status: </span>
          {props.status}
        </div>
        <div className="attribute">
          <span>Created By:</span>
          {props.created_by}
        </div>
        <div className="attribute">
          <span>Assigned To:</span>
          {props.assigned_to}
        </div>
      </div>
    </li>
  );
};

export default CardListItem;

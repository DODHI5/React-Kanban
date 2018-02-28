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
          <select>
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="Q">Queue</option>
            <option value="IP">In Progress</option>
            <option value="D">Done</option>
          </select>
        </div>
        <div className="attribute">
          <span>Created By:</span>
          {props.created_by}
        </div>
        <div className="attribute">
          <span>Assigned To:</span>
          {props.assigned_to}
        </div>
        <form action="/:id" method="put">
          <button type="button" onclick="{}">
            Edit
          </button>
        </form>
        <form action="/:id" method="delete">
          <button type="button" onclick={this.deleteCard}>
            Delete
          </button>
        </form>
        <br />
        <br />
      </div>
    </li>
  );
};

export default CardListItem;

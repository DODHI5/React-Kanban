import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "./App.css";
import { loadCards } from "../actions";

import KanbanList from "../components/KanbanList";
import KanbanListItem from "../components/KanbanListItem";
//import from

class App extends Component {
  constructor(props) {
    super(props);

    this.findCardByTitle = this.findCardByTitle.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }
  componentDidMount() {
    this.props.loadCards();
  }

  findCardByTitle(title) {
    const foundCard = this.props.cards.find(card => {
      return card.title === title;
    });
    if (foundCard) {
      return foundCard;
    }
  }
  deleteCard(event) {
    this.props.actions.deleteCard(this.state.cards);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kanban</h1>
        </header>
        <p className="App-intro">What To Do</p>
        <KanbanList cards={this.props.cards} />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: data => {
      dispatch(loadCards(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

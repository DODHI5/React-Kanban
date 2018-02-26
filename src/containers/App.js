import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { ActiveCard } from "../components/KanbanCards";
import { loadCards } from "../actions/index";
//import from

class App extends Component {
  constructor(props) {
    super(props);

    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.findCardByTitle = this.findCardByTitle.bind(this);
  }
  componentDidMount() {
    this.props.loadCards();
  }
  cardClickHandler(event) {
    const cardTitle = event.currentTarget.dataset.cardTitle;
    if (cardTitle) {
      const foundCard = this.findCardByTitle(cardTitle);
      if (foundCard) {
        this.props.setActiveCard(foundCard);
      }
    }
  }

  findCardByTitle(title) {
    const foundCard = this.props.cards.find(card => {
      return planet.name === name;
    });
    if (foundCard) {
      return foundCard;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kanban</h1>
        </header>
        <ActiveCard card={this.props.activeCard} />
        <p className="App-intro">What To Do</p>
        <CardList
          planet={this.props.cards}
          cardClickHandler={this.cardClickHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    activeCard: state.cards.activeCard
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    },
    setActiveCard: card => {
      dispatch(setActiveCard(card));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { LOAD_CARDS, SET_ACTIVE_CARD } from "../actions/index";

const initialState = {
  cards: [],
  activeCard: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return { ...state, cards: action.cards };
    case SET_ACTIVE_CARD:
      return { ...state, activeCard: { ...action.planet } };

    default:
      return state;
  }
};

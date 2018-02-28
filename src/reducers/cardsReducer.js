import { LOAD_CARDS } from "../actions/index";

const initialState = {
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return { ...state, cards: action.cards };

    default:
      return state;
  }
};

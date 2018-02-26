import "whatwg-fetch";

const KANBAN_API = "/api/kanban";

export const LOAD_CARDS = "LOAD_CARDS";
export const SET_ACTIVE_CARD = "SET_ACTIVE_CARD";

export const setActiveCard = card => {
  if (card) {
    return {
      type: SET_ACTIVE_CARD,
      card
    };
  }
};

export const loadCards = () => {
  return dispatch => {
    return fetch(`${KANBAN_API}/cards`)
      .then(result => {
        return result.json();
      })
      .then(json => {
        return json.results;
      })
      .then(cards => {
        dispatch({
          type: LOAD_CARDS,
          cards
        });
        dispatch(setActiveCard(cards[0]));
      })
      .catch(err => {
        console.log(err);
        return dispatch({
          type: LOAD_CARDS,
          planets: []
        });
      });
  };
};

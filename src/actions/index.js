import "whatwg-fetch";

const KANBAN_API = "/api/kanban";

export const LOAD_CARDS = "LOAD_CARDS";

export const loadCards = data => {
  return dispatch => {
    console.log("test");
    return fetch(`${KANBAN_API}`)
      .then(result => {
        console.log("testresult", result);
        return result.json();
      })
      .then(json => {
        console.log(json);
        dispatch({
          type: LOAD_CARDS,
          cards: json
        });
      })
      .catch(err => {
        console.log(err);
        return dispatch({
          type: LOAD_CARDS,
          cards: []
        });
      });
  };
};

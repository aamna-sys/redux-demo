const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// Action: plain JavaScript object with "type" property
// Action creator: a function that returns the action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
    // you can have any number of properties you want
  };
}

// reducer function needs state and action as parameters

//state
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

//to create a store, we need to involve redux, so let's import it
const store = createStore(reducer); // responsibility 1
console.log("Initial state:", store.getState()); // responsibility 2
const unsubscribe = store.subscribe(() =>
  console.log("Updated state:", store.getState())
); // responsibility 4

store.dispatch(buyCake()); // responsibility 3
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();

/*** Fetching user data from an API endpoint ***/

const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

//initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//action creators
const FETCH_USERS_REQUEST = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const FETCH_USERS_SUCCESS = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const FETCH_USERS_FAILURE = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

//use action creators with network requests (i.e. make an API call with Redux)
//we need two packages:
//axios: makes get requests to an API endpoint
//redux-thunk: define async action creators (it is a middleware)

const fetchUsers = () => {
  //thunk middleware allows to return a function from an action creator instead
  //of an action. It doesn't have to be pure. It is allowed to have side effects.
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("jsonplaceholder.typicode.com/users")
      .then((response) => {
        //response.data
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        //error.message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

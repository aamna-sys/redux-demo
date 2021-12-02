/*** Fetching user data from an API endpoint ***/

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

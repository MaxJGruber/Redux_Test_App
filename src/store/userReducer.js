const initialState = { username: "Maximilian" };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateUser":
      return { ...state, username: "Max" };
    case "updateMyName":
      return { ...state, username: action.payload };
    case "loadingUser":
      return { ...state, username: "Loading..." };
    case "asyncUser":
      return { ...state, username: action.payload };
    case "error":
      return { ...state, username: "ERROR" };
    default:
      return state;
  }
};


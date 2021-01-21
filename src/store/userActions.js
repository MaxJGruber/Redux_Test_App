export const asyncRandomUser = () => {
  return async function (dispatch) {
    dispatch({ type: "loadingUser" });
    try {
      const request = await fetch("https://randomuser.me/api");
      const userData = await request.json();
      console.log("Got User", userData);
      dispatch({ type: "asyncUser", payload: userData.results[0].name.first });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
};

export const updateUser = () => {
  return { type: "updateUser" };
};

export const updateMyName = (e) => {
  return { type: "updateMyName", payload: e};
};

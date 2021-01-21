import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncRandomUser, updateMyName, updateUser } from "./store/userActions";

function Header() {
  const user = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  return (
    <div>
      {user}&nbsp;
      <input onChange={(e) => dispatch(updateMyName(e.target.value))}></input>
      &nbsp;
      <button onClick={() => dispatch(updateUser())}>Update User</button>&nbsp;
      <button onClick={() => dispatch(asyncRandomUser())}>Random User</button>
    </div>
  );
}

export default Header;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector();
  return (
    <div>
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;

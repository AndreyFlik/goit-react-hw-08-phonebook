import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/contacts/contscts-operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.account[0].user.name);
  // console.log(name);
  return (
    <div>
      <span>Добро пожаловать,{name} </span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;

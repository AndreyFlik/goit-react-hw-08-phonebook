import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/contacts/contscts-operations";
import s from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state?.account?.user?.name);
  return (
    <>
      {name && (
        <div>
          <span>Добро пожаловать,{name} </span>
          <button
            className={s.UserMenuButton}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Выйти
          </button>
        </div>
      )}
    </>
  );
};

export default UserMenu;

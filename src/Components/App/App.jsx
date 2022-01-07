import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Contacts from "../Contacts/Contacts";
import Register from "../Register/Register";
import Login from "../Login/Login";
import UserMenu from "../UserMenu/UserMenu";
import StartPage from "../StartPage/StartPage";
import { getCurrentUser } from "../../redux/contacts/contscts-operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLogIn = useSelector((state) => state.account.isLogin);
  return (
    <>
      <nav>
        <NavLink to="/">StartPage</NavLink>
        {!isLogIn && (
          <NavLink to="/Login" exact>
            Login
          </NavLink>
        )}
        {!isLogIn && (
          <NavLink to="/Register" exact>
            Register
          </NavLink>
        )}
        {isLogIn && <NavLink to="/Contacts">Contacts</NavLink>}
        {isLogIn && <UserMenu />}
      </nav>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;

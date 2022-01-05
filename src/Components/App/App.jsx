import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Contacts from "../Contacts/Contacts";
import Register from "../Register/Register";
import Login from "../Login/Login";
import UserMenu from "../UserMenu/UserMenu";

const App = () => {
  const isLogIn = useSelector((state) => state.isLogin);
  return (
    <>
      <nav>
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
      </Switch>
    </>
  );
};
export default App;

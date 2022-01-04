import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Register from "../Register/Register";
import Login from "../Login/Login";

const App = () => {
  return (
    <>
      <nav>
        {/* <nav className={s.Nav}> */}
        <NavLink
          to="/Login"
          exact
          // className={s.link}
          // activeClassName={s.activeLink}
        >
          Login
        </NavLink>
        <NavLink
          to="/Register"
          exact
          // className={s.link}
          // activeClassName={s.activeLink}
        >
          Register
        </NavLink>
        <NavLink
          to="/Contacts"
          // className={s.link}
          // activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
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

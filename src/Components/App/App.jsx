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
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import { getCurrentUser } from "../../redux/contacts/contscts-operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLogIn = useSelector((state) => state.account.isLogin);
  const loading = useSelector((state) => state.showContacts);
  // console.log(loading);
  return (
    <>
      {!loading && (
        <nav>
          <NavLink to="/">StartPage</NavLink>
          {loading && (
            <NavLink to="/Login" exact>
              Login
            </NavLink>
          )}
          {loading && (
            <NavLink to="/Register" exact>
              Register
            </NavLink>
          )}
          {isLogIn && <NavLink to="/Contacts">Contacts</NavLink>}
          {isLogIn && <UserMenu />}
        </nav>
      )}
      {!loading && (
        <Switch>
          <PublicRoute restricted redirectTo="/Contacts" path="/Login">
            <Login />
          </PublicRoute>
          <PublicRoute restricted path="/Register">
            <Register />
          </PublicRoute>
          <PrivateRoute restricted redirectTo="/Login" path="/Contacts">
            <Contacts />
          </PrivateRoute>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      )}
    </>
  );
};
export default App;

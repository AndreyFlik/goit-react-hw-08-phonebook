import React, { lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import UserMenu from "../UserMenu/UserMenu";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import { getCurrentUser } from "../../redux/contacts/contscts-operations";
import s from "./App.module.css";

const Contacts = lazy(() =>
  import("../Contacts/Contacts" /* webpackChunkName: "ContactsPage"*/)
);
const Register = lazy(() =>
  import("../Register/Register" /* webpackChunkName: "RegisterPage"*/)
);
const Login = lazy(() =>
  import("../Login/Login" /* webpackChunkName: "LoginPage"*/)
);
const StartPage = lazy(() =>
  import("../StartPage/StartPage" /* webpackChunkName: "StartPage"*/)
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLogIn = useSelector((state) => state.account.isLogin);
  const loading = useSelector((state) => state.showContacts);
  return (
    <>
      {!loading && (
        <>
          <nav className={s.navMenu}>
            <div>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                exact
                to="/"
              >
                StartPage
              </NavLink>
              {!isLogIn && (
                <NavLink
                  className={s.link}
                  activeClassName={s.activeLink}
                  to="/Login"
                  exact
                >
                  Login
                </NavLink>
              )}
              {!isLogIn && (
                <NavLink
                  className={s.link}
                  activeClassName={s.activeLink}
                  to="/Register"
                  exact
                >
                  Register
                </NavLink>
              )}
              {isLogIn && (
                <NavLink
                  exact
                  className={s.link}
                  activeClassName={s.activeLink}
                  to="/Contacts"
                >
                  Contacts
                </NavLink>
              )}
            </div>
            {isLogIn && <UserMenu />}
          </nav>
        </>
      )}
      {!loading && (
        <Suspense fallback={<h1>Загрузка</h1>}>
          <Switch>
            <PublicRoute restricted redirectTo="/Contacts" path="/Login">
              <Login />
            </PublicRoute>
            <PublicRoute restricted redirectTo="/Contacts" path="/Register">
              <Register />
            </PublicRoute>
            <PrivateRoute restricted redirectTo="/Login" path="/Contacts">
              <Contacts />
            </PrivateRoute>
            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </Suspense>
      )}
    </>
  );
};
export default App;

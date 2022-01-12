// import React from "react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

import { loginAccount } from "../../redux/contacts/contscts-operations";
import s from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const errorAlert = useSelector((state) => state?.account?.error);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!errorAlert) {
      return;
    }
    setOpen(true);
  }, [errorAlert]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (!errorAlert) {
  //     return;
  //   }
  //   toast.error(`${errorAlert}`, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }, [errorAlert]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
      // alert(errors.email);
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 7) {
      errors.password = "Пароль должен быть не короче 7 символов";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log(values);
      // alert(JSON.stringify(values, null, 2));
      dispatch(loginAccount(values));
      // setEmail("");
      // setPassword("");
    },
  });
  // console.log(formik.errors.password);
  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(loginAccount({ email, password }));
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div>
      <h2 className={s.title}>Login</h2>
      <Box
        sx={{
          width: 600,
          height: 600,
          backgroundColor: "primary",
          "& .MuiTextField-root": { width: "40ch" },
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          {/* <form onSubmit={formik.handleSubmit} className={s.Wrap}> */}
          <TextField
            sx={{ mr: 2 }}
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
            autoComplete="on"
          />
          {/* <label>
          E-mail
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </label> */}
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
            autoComplete="off"
          />
          {/* <label>
          Password
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
        </label> */}
          <div>
            <Button color="primary" variant="contained" type="submit">
              Sign up
            </Button>
            {/* <button className={s.UserMenuButton} type="submit">
            Sign up
          </button> */}
          </div>
        </form>
      </Box>
      {errorAlert && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert variant="filled" severity="error">
              <AlertTitle>Error</AlertTitle>
              {errorAlert}
            </Alert>
          </Snackbar>
        </Stack>
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};

// {
//   /* // return (
//   //   <div>
//   //     <h2 className={s.title}>Login Page</h2>
//   //     <form onSubmit={handleSubmit} className={s.Wrap}>
//   //       <label>
//   //         e-mail
//   //         <input
//   //           type="email"
//   //           name="email"
//   //           value={email}
//   //           onChange={handleChangeEmail}
//   //           required
//   //         />
//   //       </label>
//   //       <label>
//   //         password
//   //         <input
//   //           type="password"
//   //           name="password"
//   //           value={password}
//   //           onChange={handleChangePassword}
//   //           required
//   //         />
//   //       </label>
//   //       <div>
//   //         <button className={s.UserMenuButton} type="submit">
//   //           Sign up
//   //         </button>
//   //       </div>
//   //     </form>
//   //   </div>
//   // );
// }; */
// }

export default Login;

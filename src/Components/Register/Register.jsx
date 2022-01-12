import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Register.module.css";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

import { addNewAccount } from "../../redux/contacts/contscts-operations";

const Register = () => {
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

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3) {
      errors.name = "Имя должно быть не короче 3 символов";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
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
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(addNewAccount(values));
    },
  });

  return (
    <>
      <h2 className={s.title}>Register</h2>
      <Box
        sx={{
          width: 600,
          height: 600,
          backgroundColor: "primary",
          "& .MuiTextField-root": { width: "40ch" },
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="text"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
            required
            autoComplete="on"
          />
          <TextField
            sx={{ mr: 2 }}
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
            required
            autoComplete="on"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
            required
            autoComplete="off"
          />
          <div>
            <Button color="primary" variant="contained" type="submit">
              Create new Account
            </Button>
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
    </>
  );
};

export default Register;

import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Form = ({ addList }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (
      !/[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
        values.name
      )
    ) {
      errors.name =
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
    }
    if (!values.number) {
      errors.number = "Required";
    } else if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.number
      )
    ) {
      errors.number =
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "kek",
      number: "kekw",
    },
    validate,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      addList(values);
      resetForm();
    },
  });

  return (
    <Box
      sx={{
        width: 600,
        height: 200,
        backgroundColor: "primary",
        "& .MuiTextField-root": { width: "40ch" },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          name="name"
          required
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
          label="Name"
        />

        <TextField
          onChange={formik.handleChange}
          value={formik.values.number}
          type="tel"
          name="number"
          required
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          margin="normal"
          label="Number"
        />

        <div>
          <Button color="primary" variant="contained" type="submit">
            Add Contact
          </Button>
        </div>
      </form>
    </Box>
  );
};

Form.propTypes = {
  addList: PropTypes.func,
};

export default Form;

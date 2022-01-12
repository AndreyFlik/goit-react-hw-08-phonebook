import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const Filter = ({ onChangeFilter, filState }) => {
  return (
    <TextField
      type="text"
      name="filter"
      value={filState}
      onChange={onChangeFilter}
      label="Filter by name"
    />
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filState: PropTypes.string,
};

export default Filter;

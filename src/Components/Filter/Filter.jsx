import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onChangeFilter, filState }) => {
  return (
    <label>
      <p>Filter by name</p>
      <input
        type="text"
        name="filter"
        value={filState}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filState: PropTypes.string,
};

export default Filter;

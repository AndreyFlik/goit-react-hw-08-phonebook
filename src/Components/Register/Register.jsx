import React from "react";

const Register = () => {
  return (
    <div>
      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          e-mail
          <input type="text" name="email" />
        </label>
        <label>
          password
          <input type="text" name="password" />
        </label>
        <button type="submit">Create new Account</button>
      </form>
    </div>
  );
};

export default Register;

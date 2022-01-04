import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label>
          e-mail
          <input type="text" name="email" />
        </label>
        <label>
          password
          <input type="text" name="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Login;

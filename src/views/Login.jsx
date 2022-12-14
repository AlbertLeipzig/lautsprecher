import { Navigate } from "react-router-dom";
export const Login = () => {
  return (
    <div className="login">
      <h1>Admin Login</h1>
      <form action="">
        <label htmlFor="">
          Email
          <input type="text" placeholder="Email" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

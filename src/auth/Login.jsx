import { useState } from "react";
import { useAuth } from "./AuthContext";
import { usePage } from "../layout/PageContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const { setPage } = usePage();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      setPage("activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={tryLogin}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
        {error && <p role="alert">{error}</p>}
      </form>
      <a onClick={() => setPage("register")}>Need an account? Register here.</a>
    </>
  );
}

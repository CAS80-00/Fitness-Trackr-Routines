import { useState } from "react";
import { useAuth } from "./AuthContext";
import { usePage } from "../layout/PageContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const { setPage } = usePage();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login({ username, password });
      setPage("routines"); // Redirect to routines so they can see their new dashboard!
    } catch (e) {
      setError(e.message || "Invalid username or password.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        {error && (
          <p role="alert" className="error">
            {error}
          </p>
        )}
      </form>
      <a onClick={() => setPage("register")} style={{ cursor: "pointer" }}>
        Need an account? Register here.
      </a>
    </div>
  );
}

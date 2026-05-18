import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="auth-form">

        <div className="form-logo">
          <span>⚡</span>
        </div>

        <h2>Welcome back</h2>
        <p className="form-subtitle">Sign in to continue</p>

        <form onSubmit={handleLogin}>
          <div className="field-group">
            <label htmlFor="email">Email address</label>
            <div className="input-wrap">
              <span className="input-icon">✉</span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <span className="input-icon">🔒</span>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>
          </div>

          <p className="forgot-link">Forgot password?</p>

          <button type="submit">Sign in</button>
        </form>

        <div className="divider"><hr /><span>or</span><hr /></div>

        <p className="switch-auth">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
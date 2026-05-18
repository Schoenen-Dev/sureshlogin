import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signupData);
    navigate("/");
  };

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0effe",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      padding: "36px 32px",
      borderRadius: "16px",
      border: "1px solid #CECBF6",
      width: "100%",
      maxWidth: "360px",
      boxSizing: "border-box",
    },
    logoBox: {
      width: "44px",
      height: "44px",
      borderRadius: "10px",
      backgroundColor: "#EEEDFE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px",
      fontSize: "22px",
    },
    heading: {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "600",
      color: "#26215C",
      margin: "0 0 4px",
    },
    subtext: {
      textAlign: "center",
      fontSize: "13px",
      color: "#888780",
      margin: "0 0 24px",
    },
    label: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: "#534AB7",
      marginBottom: "6px",
    },
    fieldGroup: {
      marginBottom: "16px",
    },
    inputWrap: {
      position: "relative",
    },
    inputIcon: {
      position: "absolute",
      left: "11px",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "15px",
      color: "#AFA9EC",
      pointerEvents: "none",
    },
    input: {
      width: "100%",
      padding: "10px 12px 10px 36px",
      border: "1.5px solid #CECBF6",
      borderRadius: "8px",
      backgroundColor: "#EEEDFE",
      color: "#26215C",
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box",
    },
    eyeBtn: {
      position: "absolute",
      right: "11px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "15px",
      color: "#AFA9EC",
      padding: 0,
      width: "auto",
      margin: 0,
    },
    submitBtn: {
      width: "100%",
      padding: "11px",
      backgroundColor: "#534AB7",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      letterSpacing: "0.3px",
      marginTop: "4px",
    },
    dividerRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "20px 0",
    },
    dividerLine: {
      flex: 1,
      border: "none",
      borderTop: "1px solid #CECBF6",
    },
    dividerText: {
      fontSize: "12px",
      color: "#B4B2A9",
    },
    switchRow: {
      textAlign: "center",
      fontSize: "13px",
      color: "#888780",
      margin: 0,
    },
    switchLink: {
      color: "#534AB7",
      fontWeight: "600",
      textDecoration: "none",
    },
    strengthBar: {
      display: "flex",
      gap: "4px",
      marginTop: "8px",
    },
    strengthSegment: (active, color) => ({
      flex: 1,
      height: "3px",
      borderRadius: "4px",
      backgroundColor: active ? color : "#CECBF6",
      transition: "background-color 0.3s",
    }),
    strengthLabel: (color) => ({
      fontSize: "11px",
      color: color,
      marginTop: "4px",
      fontWeight: "500",
    }),
  };

  const getStrength = (password) => {
    if (password.length === 0) return { level: 0, label: "", color: "#CECBF6" };
    if (password.length < 5) return { level: 1, label: "Weak", color: "#E24B4A" };
    if (password.length < 8) return { level: 2, label: "Fair", color: "#EF9F27" };
    if (password.length >= 8 && /[^a-zA-Z0-9]/.test(password))
      return { level: 3, label: "Strong", color: "#1D9E75" };
    return { level: 2, label: "Fair", color: "#EF9F27" };
  };

  const strength = getStrength(signupData.password);

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={styles.logoBox}>⚡</div>

        <h2 style={styles.heading}>Create account</h2>
        <p style={styles.subtext}>Sign up to get started</p>

        <form onSubmit={handleSignup}>

          {/* Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full name</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>👤</span>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="John Doe"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email address</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>✉</span>
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                style={{ ...styles.input, paddingRight: "38px" }}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
              />
              <button
                type="button"
                style={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            {/* Password strength bar */}
            {signupData.password.length > 0 && (
              <>
                <div style={styles.strengthBar}>
                  {[1, 2, 3].map((seg) => (
                    <div
                      key={seg}
                      style={styles.strengthSegment(
                        strength.level >= seg,
                        strength.color
                      )}
                    />
                  ))}
                </div>
                <p style={styles.strengthLabel(strength.color)}>
                  {strength.label}
                </p>
              </>
            )}
          </div>

          <button type="submit" style={styles.submitBtn}>
            Create account
          </button>
        </form>

        <div style={styles.dividerRow}>
          <hr style={styles.dividerLine} />
          <span style={styles.dividerText}>or</span>
          <hr style={styles.dividerLine} />
        </div>

        <p style={styles.switchRow}>
          Already have an account?{" "}
          <Link to="/" style={styles.switchLink}>Sign in</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
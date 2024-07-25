import { useNavigate } from "react-router-dom";
import { getUserData } from "../services/api";
import { useState, useEffect } from "react";

export default function Login() {
  // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";
  const API_URL = "http://localhost:3001";

  // Hooks

  // vede se l'utente è loggato o meno
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // raccoglie le info dell'utente
  const [user, setUser] = useState(null);
  // hook di navigazione
  const navigate = useNavigate();

  // input handler
  const handleGoogleLogin = () => {
    // redirect to google login
    window.location.href = `${API_URL}/api/auth/google`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.dispatchEvent(new Event("loginStateChange"));
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token); // Aggiungi questo log

      if (token) {
        try {
          const userData = await getUserData();
          console.log("User data received:", userData); // Aggiungi questo log
          setUser(userData);
          setIsLoggedIn(true);
        } catch (err) {
          console.error("Error fetching user data:", err);
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          setUser(null);
        }
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    checkLoginStatus();

    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("loginStateChange", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("loginStateChange", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  return (
    <>
      {isLoggedIn && user ? (
        <div>
          <h1>Sei loggato con google</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login con google</h1>
          <button onClick={handleGoogleLogin}>Login</button>
        </div>
      )}
    </>
  );
}

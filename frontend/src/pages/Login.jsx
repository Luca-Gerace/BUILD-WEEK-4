import { useNavigate } from "react-router-dom";
import { getUserData } from "../services/api";
import { useState, useEffect } from "react";

export default function Login() {

    // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";
    const API_URL = "http://localhost:3001"

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
        const checkLoginStatus = async () => {
            const token = localStorage.getItem('token');
    
            if (token) {
                try {
                    const userData = await getUserData();
                    setUser(userData);
                    setIsLoggedIn(true);
                } catch (err) {
                    console.error('Token not valid', err);
                    localStorage.removeItem('token');
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
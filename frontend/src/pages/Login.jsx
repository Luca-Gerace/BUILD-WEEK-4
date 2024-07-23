export default function Login() {

    // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";
    const API_URL = "http://localhost:3001"

    // input handler
    const handleGoogleLogin = () => {
        // redirect to google login
        window.location.href = `${API_URL}/api/auth/google`;
    };

    return (
        <>
            <h1>Login con google</h1>
            <button onClick={handleGoogleLogin}>Login</button>
        </>
    );
}
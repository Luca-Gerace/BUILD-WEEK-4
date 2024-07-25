import { createContext, useState, useEffect } from 'react';
import { getUserData } from '../services/api';

// creo un nuovo contesto con le info dell'utente loggato
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // funzione che controlla lo stato di login
  useEffect(() => {
    const checkLoginStatus = async () => {
      // controllo se c'è un token nel localStorage
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // se c'è un token, chiamo la funzione getUserData per ottenere i dati dell'utente
          const userData = await getUserData();
          setUser(userData);
          setIsLoggedIn(true);
        } catch (err) {
          // se c'è un errore, rimuovo il token dal localStorage e setto lo stato di login a false
          console.error('Error fetching user data:', err);
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          setUser(null);
        }
      } else {
        // se non c'è un token, setto lo stato di login a false
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    // chiamo la funzione checkLoginStatus per controllare lo stato di login
    checkLoginStatus();

    // aggiorno lo stato di login quando cambia il token nel localStorage
    const handleStorageChange = () => {
      checkLoginStatus();
    };

    // aggiungo i listener per controllare lo stato di login
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('loginStateChange', handleStorageChange);

    // rimuovo i listener quando il componente viene smontato
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('loginStateChange', handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, user, setUser, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
import express from "express";
import User from '../models/User.js';
import { generateJWT } from '../utils/jwt.js'
import { authMiddleware } from "../middlewares/authMiddleware.js";

// const FRONTEND_URL = process.env.FRONTEND_URL || 'http:localhost:5173';
const FRONTEND_URL = 'http:localhost:5173';

const router = express.Router();

// POST /login
router.post('/login', async (req, res) => {
    try {
        // prendo email e password dalla body della request
        const { email, password } = req.body;
        // cerco nel DB lo user con quella email (univoca) e lo assegno alla const user
        const user = await User.findOne({ email })

        // check se user NON esiste
        if (!user) {
            return res.status(401).json({ message: 'credenziali non valide' })
        }

        // Compara la password con la password hashata
        const isMatch = await user.comparePassword(password);

        // check se le password NON sono uguali
        if (!isMatch) {
            return res.status(401).json({ message: 'password diversa da quella hashata a db' })
        }

        // genero un jwt token passando come argomento del metodo l'id dello user e l'assegno alla const token
        const token = await generateJWT({ id: user._id });

        // invio il token dentro la risposta
        res.json({ token, message: 'Login effettuata!' });

    } catch (err) {
        console.error('login error', err);
    }
});

// GET /me
router.get('/me', authMiddleware, async (req, res) => {
    
    // archiviamo i dati dell'utente dentro userData
    const userData = req.user.toObject();
    // Rimuoviamo dalla get la password dell'utente per questioni di sicurezza
    delete userData.password;

    // inivamo nella risposta i dati dell'utente (senza password)
    res.json(userData);
});

// GOOGLE

// GET /google - handle google auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET /google/callback - callback function after google auth
router.get('/google/callback', passport.authenticate('google', { failureRedirect: `${FRONTEND_URL}/login` }), async (req, res) => {
    try {
        // generate jwt token
        const token = await generateJWT({ id: req.user._id });

        // redirect user with token to frontend, use token for the other requests
        res.redirect(`${FRONTEND_URL}/login?token=${token}`);

    } catch (err) {
        console.error('Token generation error', err);
        res.redirect(`${FRONTEND_URL}/login/error=auth_failed`);
    }
});

export default router;
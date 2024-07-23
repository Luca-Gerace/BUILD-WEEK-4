import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import endpoints from 'express-list-endpoints';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import passport from 'passport';
import session from 'express-session';
import userRoutes from './routes/userRoutes.js';
// error Middlewares
import {
    badRequestHandler,
    unauthorizedHandler,
    notFoundHandler,
    genericErrorHandler,
  } from './middlewares/errorHandlers.js';

dotenv.config();

const app = express();

// cors cofiguration
const corsOptions = {
    origin: function(origin, callback) {
      const whiteList = [
        'http://localhost:5173', // development
        // 'https://mern-blog-eight-pearl.vercel.app', // vercel
        // 'https://mern-blog-b8ed.onrender.com' // render
      ];
  
      if (process.env.NODE_ENV === 'development') {
        callback(null, true);
      } else if (whiteList.indexOf !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Generic Cors Error'));
      }
    },
    credentials: true
  }
  
  // App - Global Middlewares
  app.use(cors(corsOptions));
  app.use(express.json());
  
  // Session configuration
  app.use(
    session({
      // use session_secret to validate cookie session 
      secret: process.env.SESSION_SECRET,
      // session optimizations
      resave: false,
      saveUninitialized: false
    })
  );
  
  // use passport configuration
  app.use(passport.initialize());
  app.use(passport.session());
  


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connesso'))
    .catch((err) => console.error('Errore di connessione', err));

// App - Routes 
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// definizione porta
const PORT = process.env.PORT || 3000;

// error handlers middlewares
app.use(badRequestHandler);
app.use(unauthorizedHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);

app.listen(PORT, () => {
    console.log(`Server connesso sulla porta ${PORT}`);
    console.log('Environment:', process.env.NODE_ENV);
    console.table(
        endpoints(app).map((route) => ({
          path: route.path,
          methods: route.methods.join(", "),
        }))
    );
});
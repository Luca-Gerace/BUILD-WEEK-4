import express from 'express';
import User from '../models/User.js';
import upload from '../middlewares/upload.js';

// inizializzo il router
const router = express.Router();

// GET User
// router.get('/user', async )
router.get('/', async (req,res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//GET User by ID
router.get('/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({message: 'Utente non trovato'})
        } else {
            res.json(user);
        }
    } catch(err){
        res.status(500).json({message: err.message});
    }})


// Put avatar user
router.patch("/:id", upload.single("avatar"), async (req, res) => {
    try{
        // cerco a db lo user con id specifico (preso dal param)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        // in user data ho il body della request
        const userData = req.body;

        // se c'è il file nella request aggiorno user.avatar con il file
        if (req.file) {
            userData.avatar = `http://localhost:3001/uploads/${req.file.filename}`;
        }

        // ritorno nella response lo user aggiornato
        res.status(201).json(updatedUser);
    } catch(err) {
        res.status(400).json({message: err.message});
    }
});

//POST User
router.post('/', async (req,res) => {
    const user = new User(req.body);
    try {
        const newUser= await user.save();
        res.status(201).json(newUser)
    }catch(err) {
        res.status(400).json({message: err.message});
    }
});

//DELETE User
router.delete('/:id', async (req,res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) {
            return res.status(404).json({message: 'Utente non trovato'})
        } else {
            res.json({message: 'Utente cancellato'});
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

//PATCH User
router.patch('/:id', async (req,res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedUser);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

//---------------------------------- CRUD USER FINE---------------------------------

//---------------------------------- CRUD EXPERIENCE INIZIO---------------------------------

//GET User Experience by ID
router.get('/:id/experiences', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({message: 'Utente non trovato'})
        } else {
            res.json(user.experiences);
        }
    } catch(err){
        res.status(500).json({message: err.message});
    }})

//GET User Experience by ID
router.get('/:id/experiences/:experienceId', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        const experience = user.experiences.find(experience => experience.id === req.params.experienceId);
        res.json(experience);
    } catch(err){
        res.status(500).json({message: err.message});
    }})


//POST User Experience
router.post('/:id/experiences', upload.single('logo'), async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User non trovato" });
      }
      const newExperience = {
        company: req.body.company,
        role: req.body.role,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        area: req.body.area,
      };
      if (req.file) {
        newExperience.logo = `http://localhost:3001/uploads/${req.file.filename}`;
      }
      user.experiences.push(newExperience);
      await user.save();
      res.status(201).json(newExperience);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

//PATCH User Experiences 
router.patch('/:id/experiences/:experienceId', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User non trovato" });
        }
        
        const experience = user.experiences.id(req.params.experienceId);
        if (!experience) {
            return res.status(404).json({ message: "Esperienza non trovata" });
        }
        
        // Aggiorna i campi dell'esperienza
        Object.assign(experience, req.body);
        
        // Salva le modifiche
        await user.save();
        
        res.json(experience);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//DELETE USER EXPERIENCE
router.delete("/:id/experiences/:experienceId", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
        if (!user) {
        return res.status(404).json({ message: "User non trovato" });
      }
      
      // Usa il metodo pull per rimuovere il commento dall'array
      user.experiences.pull({ _id: req.params.experienceId });
      
      // Salva il post aggiornato
      await user.save();
      
      res.json({ message: "Esperienza eliminata con successo" });
    } catch (error) {
      console.error("Errore durante l'eliminazione dell'esperienza:", error);
      res.status(500).json({ message: error.message });
    }
  });

  //---------------------------------- CRUD QUALIFICHE INIZIO---------------------------------

//GET User Qualifications by ID
router.get('/:id/qualifications', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({message: 'Utente non trovato'})
        } else {
            res.json(user.qualifications);
        }
    } catch(err){
        res.status(500).json({message: err.message});
    }})

//GET User Qualifications by ID
router.get('/:id/qualifications/:qualificationId', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        const qualification = user.qualifications.find(qualification => qualification.id === req.params.qualificationId);
        res.json(qualification);
    } catch(err){
        res.status(500).json({message: err.message});
    }})


//POST User Qualifications
router.post('/:id/qualifications', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Post non trovato" });
          }
          const newQualification = {
            name: req.body.name,
            institute: req.body.institute,
          };
        user.qualifications.push(newQualification);
        await user.save();
        res.status(201).json(newQualification);
    } catch(err){
        res.status(500).json({message: err.message});
    }})

//PATCH User Experiences 
router.patch('/:id/qualifications/:qualificationId', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User non trovato" });
        }
        
        const qualification = user.qualifications.id(req.params.qualificationId);
        if (!qualification) {
            return res.status(404).json({ message: "Qualifiche non trovate" });
        }
        
        // Aggiorna i campi dell'esperienza
        Object.assign(qualification, req.body);
        
        // Salva le modifiche
        await user.save();
        
        res.json(qualification);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//DELETE USER QUALIFICATION
router.delete("/:id/qualifications/:qualificationId", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
        if (!user) {
        return res.status(404).json({ message: "User non trovato" });
      }
      
      // Usa il metodo pull per rimuovere il commento dall'array
      user.qualifications.pull({ _id: req.params.qualificationId });
      
      // Salva il post aggiornato
      await user.save();
      
      res.json({ message: "Qualifiche eliminata con successo" });
    } catch (error) {
      console.error("Errore durante l'eliminazione delle qualifiche:", error);
      res.status(500).json({ message: error.message });
    }
  });


export default router;
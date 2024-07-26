import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Subdocument - qualifiche
const qualificationSchema = new mongoose.Schema(
    {
      name: { type: String },
      institute: { type: String },
      instituteLogo: { type: String },
    },
    {
      timestamps: true,
      _id: true,
    },
);

// Subdocument - esperienze
const experienceSchema = new mongoose.Schema(
    {
        company: { type: String },
        role: { type: String },
        description: { type: String },
        logo: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
    },
    {
        timestamp: true,
        _id: true,
    }
);

// Collection User
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number },
        password: { type: String },
        googleId: { type: String },
        currentPosition: { 
            type: String,
            enum: ['employed', 'unemployed'], 
            default: 'unemployed', 
            required: true // check con Simo
        },
        avatar: { type: String },
        qualifications: [qualificationSchema],
        experiences: [experienceSchema]
    },
    {
        timestamps: true,
        collection: 'users'
    }
);


// Compare password
userSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };
  
  // Hashing password before save action
  userSchema.pre('save', async function(next) {
  
    // Check - Only if the password is new/modified 
    if (!this.isModified('password')) return next();
  
    try {
      // Get random value with 10 round of hashing
      const salt = await bcrypt.genSalt(10);
  
      // Save password on MongoDB
      this.password = bcrypt.hash(this.password, salt); // TODO: ho rimosso l'await, se non funziona un cazzo questo potrebbe essere il problema
  
      next();
  
    } catch (err) {
      next(err);
    }
});

export default mongoose.model('Users', userSchema);
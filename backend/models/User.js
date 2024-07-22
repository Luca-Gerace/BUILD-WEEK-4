import mongoose from 'mongoose';

// Subschema
const qualificationSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      institute: { type: String, required: true },
    },
    {
      timestamps: true,
      _id: true,
    },
);

const experienceSchema = new mongoose.Schema(
    {
        company: { type: String, required: true },
        role: { type: String, required: true },
        description: { type: String },
        logo: { type: String },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
    },
    {
        timestamp: true,
        _id: true,
    }
);

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        currentPosition: { 
            type: String,
            enum: ['employed', 'unemployed'], 
            default: 'unemployed', 
            required: true 
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
export default mongoose.model('Users', userSchema);
import mongoose from 'mongoose';

const clg = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60},
    city: { type: String, required: true, trim: true },
})

const clgModel = mongoose.model("clg", clg)

export default clgModel

const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  gender: String,
  experience: String,
  role: String,
  status: { type: String, default: "Pending" }, 
  interviewDate: Date,      
  description: String, 
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);

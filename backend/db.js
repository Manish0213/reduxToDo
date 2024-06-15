const mongoose = require('mongoose');
// import mongoose from "mongoose";   This is wrong but don't know why

const URL = "mongodb+srv://ratnawatmanish031:aWH9OTVFwvMcUOwX@cluster0.6ob3jo9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = () => {
    mongoose.connect(URL).then(() => console.log('connected')).catch((err) => console.error(err));
}

module.exports = connectToDB;

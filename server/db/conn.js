const mongoose = require("mongoose");

const connection = async () => {
    const uri = "mongodb+srv://sahiltamboli9494:sahil9595@cluster1.v9tthlw.mongodb.net/blood";
    
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
};

module.exports = connection;

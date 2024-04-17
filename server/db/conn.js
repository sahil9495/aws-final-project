const mongoose =require("mongoose");

const connection = async () =>{
    try{
        
const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/?authSource=admin`;

        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
     }catch(error)
     {
             console.log(error);
     }
}
module.exports = connection;
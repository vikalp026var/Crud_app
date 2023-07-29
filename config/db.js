const mongoose=require('mongoose');
const connectTodb=async()=>{
     mongoose.connect(process.env.MONGO_URI)
     .then((conn)=>{
      console.log(`Connected to DB:${conn.connection.host}`);
     })
     .catch(()=>{
          console.log(err.message);
          process.exit(1)
     })
}

module.exports=connectTodb
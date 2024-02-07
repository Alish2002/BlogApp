const mongoose= require("mongoose");
// structure 
const userSchema= new mongoose.Schema(
    {
        userName: {type: String, required: true, unique: true},
        email: {type: String, required: true}, 
        password: {type: String, required: true}
    }
);
// table creation
const userModel= mongoose.model("User", userSchema);

module.exports= userModel;
const mongoose= require("mongoose");
// schema
const blogSchema= new mongoose.Schema(
    {
        title:{type: String, required: true},
        content: {type: String, required: true},
        created_at: {type: Date, required: true},
        updated_at: {type: Date},
        // i don't use required here because our auth functionalityb is not added, it didn't provide us the user_id.
        author_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
    }
);

const blogModel= mongoose.model("Blog", blogSchema);

module.exports= blogModel;
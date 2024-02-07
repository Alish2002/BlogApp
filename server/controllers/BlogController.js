const Blog= require("../models/Blog");

// what actually Blog is handle
const saveBlog= (req, res)=>{
    try{
    const{title, content, created_at, updated_at, author_id}= req.body;
    // it will create an instance
    const newBlog= new Blog({title, content, created_at, updated_at, author_id});
    newBlog.save();
    res.send(newBlog);
    }
    catch(error){
        console.log(error);
    }
}

module.exports= {saveBlog};
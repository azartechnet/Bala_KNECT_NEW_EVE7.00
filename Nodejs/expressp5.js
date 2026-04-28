const exp=require("express");
const app=exp();
app.get("/",(req,res)=>{
    res.send(`<div><h2>Welcome to Express.js</h2><p>This is a simple Express.js application.</p></div>`);
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}
);
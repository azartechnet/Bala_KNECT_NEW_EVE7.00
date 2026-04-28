const exp=require('express');
const app=exp();
app.use(exp.json());
app.post("/",(req,res)=>{
    const {name,age}=req.body;
    res.send(`Hello ${name}, you are ${age} years old`);
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}
);
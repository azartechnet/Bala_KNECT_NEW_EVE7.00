const exp=require("express");
const app=exp();
const PORT=3000;

app.get("/add",(req,res)=>{
    const a=Number(req.query.a);
    const b=Number(req.query.b);
    const sum=a+b;
    res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
);
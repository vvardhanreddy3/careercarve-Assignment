const express =require("express")
const mysql=require("mysql2/promise")
const app=express()
app.use(express.json())
const dbConfig={
    host:"localhost",
    user:"root",
    password:"Vamsi@1994",
    database:"projectcareercarve"
}
app.get("/",(req,res)=>{
    res.send("backend running")
})

app.get("/mentors",async (req,res)=>{
    try{
        const db=await mysql.createConnection(dbConfig)
        const getQuary='SELECT * FROM `mentorslist`';
        const [result]=await db.execute(getQuary);
        res.json(result)
        await db.end();
    }catch(error){
        console.error(error);
        res.status(500).send('Error reading data from database');
    }
})


app.listen(
    5000,()=>console.log("backend is Running")
)

import express from "express"

import { prismaClient } from "db/client"

const app=express();


app.use(express.json());

app.get("/",async(req,res)=>{
    prismaClient.user.findMany()
    .then(users=>{
        res.json(users);
    })
    .catch(err=>{
        res.status(500).json({error: "Internal Server Error"});
    })
})

app.post("/user",async(req,res)=>{
    
    
    prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    .then(user=>{
        res.status(201).json(user);
    })
    .catch(err=>{
        res.status(500).json({error: "Internal  Error"});
    })
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});
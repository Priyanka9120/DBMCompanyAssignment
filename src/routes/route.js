const express = require('express')
const router = express.Router()
const { createUser, loginUser } = require("../controller/userController")
const { createTask,getTask,updateTask,deleteTask } = require("../controller/taskController")


//===================== User Registration (Post API) =====================//
router.post("/api/register", createUser)
//===================== User Login (Post API) =====================//
router.post("/api/login", loginUser)
//====================Task Registration(post API)================//
router.post("/api/addTask", createTask)
//====================get Task (get task)======================//
router.get("/apigetTask",getTask)
//====================Update the task (put api)==============//
router.put("/api/tasks/:taskId",updateTask)
//===================delete the task (delete api)===========//
router.delete("/api/deleteTask",deleteTask)


router.all('/*',function(req,res){
    res.status(400).send({message:"invalid http request"})
})

module.exports =router;

const mongoose = require("mongoose")
// schema for tasks
const taskSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    status: {
        type: String,
        require: true,
        enum: ["pending", "in progress", "completed"]
    },
  },{timestamps:true});
  

  module.exports=mongoose.model('Task',taskSchema)
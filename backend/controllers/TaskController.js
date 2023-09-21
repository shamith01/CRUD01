const TaskModel=require("../models/TaskModel")


module.exports.getTasks=async(req,res)=>{
    const tasks=await TaskModel.find()
    res.send(tasks)

    // res.send("hi");
}


module.exports.saveTasks=(req,res)=>{
 
    const {task}=req.body

    TaskModel.create({task})
    .then((data)=>{
        console.log("saved succesfully..");
        res.status(201).send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"something went wrong!"});
    });

    // res.send(tasks)
    // res.send("hi");
};


module.exports.updateTasks=(req,res)=>{
    const {id}=req.params
    const {task}=req.body

    TaskModel.findByIdAndUpdate(id,{task})
    .then(()=>{
        // console.log("saved succesfully..");
        res.send("updated data succesfully")
    }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"something went wrong!"})
    })

    // res.send(tasks)
    // res.send("hi");
}


module.exports.deleteTasks=(req,res)=>{
    const {id}=req.params
    

    TaskModel.findByIdAndDelete(id)
    .then(()=>{
        // console.log("saved succesfully..");
        res.send("deleted succesfully")
    }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"something went wrong!"})
    })

    // res.send(tasks)
    // res.send("hi");
}


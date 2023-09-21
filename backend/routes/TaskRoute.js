const {Router}=require("express")

const {
    getTasks,
    saveTasks,
    updateTasks,
    deleteTasks,
}=require("../controllers/TaskController")

const router=Router();


router.get("/get",getTasks);
router.post("/save",saveTasks);
router.put("/update/:id",updateTasks);
router.delete("/delete/:id",deleteTasks);

module.exports=router;
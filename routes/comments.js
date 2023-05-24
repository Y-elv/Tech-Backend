import express from "express"
import bodyParser from "body-parser"
import  addingComments  from "../controllers/comments.js"
const router=express.Router()
router.use(bodyParser.json())

router.post("/comments/:id",addingComments)

export default router
import express from 'express';
import { homeController } from '../controllers/homecontroller.js';
import { studentController, getStudentValues } from '../controllers/studentController.js';
import { editStudentValue, updateStudentValue, deleteStudentValue } from '../models/studentModels.js'

const router = express.Router();

router.get("/", homeController);

router.get("/Student", studentController);

router.post("/Student", getStudentValues);

router.get("/Student/edit/:id([0-9a-fA-F]{24})", editStudentValue);

router.post("/Student/update/:id([0-9a-fA-F]{24})", updateStudentValue);

router.get("/Student/delete/:id([0-9a-fA-F]{24})", deleteStudentValue);

export default router;
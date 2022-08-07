// import '../views/studentIndex.ejs';
import path from 'path';
import { addStudent, getAllStudents, updateStudentValue } from '../models/studentModels.js';


const studentController = (req, res) => {
    getAllStudents(req, res);
}

const getStudentValues = (req, res) => {
    // console.log(req.body.name);
    // console.log(req.body.age);
    // console.log(req.body.marks);
    addStudent(req.body.name, req.body.age, req.body.marks);
    getAllStudents(req, res);
}


export { studentController, getStudentValues };
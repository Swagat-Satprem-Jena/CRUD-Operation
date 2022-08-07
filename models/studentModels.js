import mongoose from "mongoose";
import path from "path";

const studentSchema = new mongoose.Schema({
    name: {type: "String", required: true},
    age: {type: "Number"},
    marks: {type: mongoose.Decimal128}
});

const StudentModel = mongoose.model('students', studentSchema);


const addStudent = async (n, a, m) => {
    const studentDoc = new StudentModel({
        name: n,
        age: a,
        marks: m
    });
    const result = await studentDoc.save();
    console.log(result);
}

const editStudentValue = async (req, res) => {
    // console.log(req.params.id);
    const result = await StudentModel.findById(req.params.id);
    res.render(path.join(process.cwd(), 'views', 'editStudent.ejs'), {studentDetails: result});
}

const getAllStudents = async (req, res) => {
    const result = await StudentModel.find();
    res.render(path.join (process.cwd(), 'views', 'studentIndex.ejs'), {studentDataArray: result});
    // console.log(typeof(result));
}

const updateStudentValue = async (req, res) => {
    const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body);
    // console.log('Hii')
    return await res.redirect('/Student');
}

const deleteStudentValue = async (req, res) => {
    // console.log(req.params.id);\
    const result = await StudentModel.findByIdAndDelete(req.params.id);
    return await res.redirect('/Student');
}



export { addStudent, getAllStudents, editStudentValue, updateStudentValue, deleteStudentValue };
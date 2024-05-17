import express from 'express';
import { studentControllers } from './student-controller';

const router = express.Router();

// will call controller function

router.post('/create-student', studentControllers.createStudent);
router.get('/get-all-students', studentControllers.getAllStudents);
router.get('/get-single-student/:id', studentControllers.getSingleStudent)

// export const StudentRoutes = router;
// console.log(StudentRoutes)


export const StudentRoutes = router
import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    console.log(student);

    // will call service function to send this data
    const result = await studentServices.createStudentIntoDB(student);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log('id', id)
    const result = await studentServices.getSingleStudentFromDB(id);
    console.log(result)
    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent
};

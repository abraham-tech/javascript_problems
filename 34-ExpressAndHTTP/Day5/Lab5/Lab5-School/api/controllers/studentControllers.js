const callbackify = require("util").callbackify;
require("dotenv").config();
const mongoose = require("mongoose");
const Student = require("../data/schemas/studentsModel");

const studentFindLimitSkipExecWithCallback = callbackify(function (
  offset,
  count
) {
  return Student.find().skip(offset).limit(count).exec();
});

const StudentFindOneWithCallback = callbackify(function (studentId) {
  return Student.findById(studentId).exec();
});

const DeleteStudentByIdWithCallback = callbackify(function (studentId) {
  return Student.findByIdAndDelete(studentId).exec();
});

const StudentInsertOneWithCallback = callbackify(function (newStudent) {
  return Student.create(newStudent);
});

const findByIdAndUpdateWithCallback = callbackify(function (newStudent) {
  return Student.findByIdAndUpdate(newStudent);
});

const getAll = function (req, res) {
  console.log("GET all students", Student);
  let offset = process.env.DEFAULT_OFFSET;
  let count = process.env.DEFAULT_COUNT;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, process.env.BASE_TEN);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, process.env.BASE_TEN);
  }
  studentFindLimitSkipExecWithCallback(offset, count, function (err, students) {
    console.log("Found students", students);
    if (err) {
      res
        .status(process.env.SERVER_ERROR_STATUS_CODE)
        .json({ message: process.env.INTERNAL_SERVER_ERROR });
    }
    res.status(process.env.OK_STATUS_CODE).json(students);
  });
};

const getOne = function (req, res) {
  const studentId = req.params.id;
  StudentFindOneWithCallback(studentId, function (err, student) {
    console.log("Found student", student);
    if (err) {
      res
        .status(process.env.NOT_FOUND_STATUS_CODE)
        .json({ message: process.env.STUDENT_NOT_FOUND });
    }
    res.status(process.env.OK_STATUS_CODE).json(student);
  });
};

const addOne = function (req, res) {
  console.log("POST new student");
  console.log("Student AddOne request");
  const newStudent = {
    name: req.body.name,
    grade: req.body.grade,
  };

  StudentInsertOneWithCallback(newStudent, function (err, student) {
    const response = {
      status: process.env.CREATED_STATUS_CODE,
      message: student,
    };
    if (err) {
      console.log("Error creating student", err);
      res
        .status(process.env.SERVER_ERROR_STATUS_CODE)
        .json({ message: process.env.INTERNAL_SERVER_ERROR });
    }
    res.status(response.status).json(response.message);
  });
};

const fullUpdateOne = function (req, res) {
  console.log("PUT one student");
  const studentId = req.params.id;

  findByIdAndUpdateWithCallback(
    studentId,
    req.body,
    { new: true },
    (err, student) => {
      if (err) {
        res
          .status(process.env.SERVER_ERROR_STATUS_CODE)
          .json({ message: process.env.INTERNAL_SERVER_ERROR });
      } else if (!student) {
        res
          .status(process.env.NOT_FOUND_STATUS_CODE)
          .json({ message: process.env.STUDENT_NOT_FOUND });
      } else {
        const response = {
          status: process.env.OK_STATUS_CODE,
          message: student,
        };
        res.status(response.status).json(response.message);
      }
    }
  );
};

const partialUpdateOne = function (req, res) {
  console.log("PATCH one student");
};

const deleteOne = function (req, res) {
  console.log("DELETE one student");
  const studentId = req.params.id;
  DeleteStudentByIdWithCallback(studentId, function (err, student) {
    if (err) {
      res
        .status(process.env.NOT_FOUND_STATUS_CODE)
        .json({ message: process.env.STUDENT_NOT_FOUND });
    }
    res.status(process.env.OK_STATUS_CODE).json(student);
  });
};

module.exports = {
  getAll,
  addOne,
  deleteOne,
  getOne,
  fullUpdateOne,
  partialUpdateOne,
};

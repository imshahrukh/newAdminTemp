const _Student = require("../model/Student");

// Methods
// addStudent

exports.addStudent = async function (req, res) {
  try {
    const addStudent = await _Student.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        attendance: addStudent,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

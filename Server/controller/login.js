const _MEMBER = require("../model/Member").default;

// get All memebers
exports.findMemeber = async function (req, res) {
  try {
    var members = await _MEMBER.find(req.body);

    const tot_mem = Object.keys(members).length;

    res.status(201).json({
      status: "success",
      total: tot_mem,
      data: {
        member: members,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

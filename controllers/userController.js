const studentDb = require("../db/studentDb");
const User = require("../schemas/userSchema");

const createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const emailExist = await User.findOne({ email: email });
    if (emailExist)
      return res.status(400).json({ message: "Email already exist!" });
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User created successfully!" });
  } catch (err) {
    console.log(err);
  }
};

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const updateAUser = async (req, res) => {
  const { userId } = req.params;
  const updatedData = req.body;
  try {
    const searchUserId = await User.findById(userId);
    if (!searchUserId) {
      return res.status(404).json({ message: "User not found" });
    }
        const updateRes = await User.findByIdAndUpdate(userId, updatedData);

    res.json({ message: "User updated successfully" }).send(updateRes);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};

const deleteAUser = async (req, res) => {
  const { userId } = req.params;
  const updatedData = req.body;
  try {
    const searchUserId = await User.findById(userId);
    if (!searchUserId) {
      return res.status(404).json({ message: "User not found" });
    }
    const deleteRes = await User.findByIdAndUpdate(userId, updatedData);

    res.json({ message: "User updated successfully" }).send(deleteRes);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};

module.exports = { createUser, getAllUser, updateAUser, deleteAUser };

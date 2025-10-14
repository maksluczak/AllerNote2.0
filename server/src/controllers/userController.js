const User = require("../models/User");
const bcrypt = require("bcrypt");

const getUserById = async (req, res) => {
  try {
    if (!req?.params?.id) {
      return res.status(400).json({ message: "ID is required" });
    }
    const userId = req.params.id;
    const user = await User.findById(userId).exec();
    if (!user) {
      return res.status(204).json({ message: "no user matches id" });
    }
    return res.json(user);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

const updateUsernameByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { username },
      { new: true }
    );
    return res.status(201).json({ message: `Username updated: ${user}` });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

const updatePasswordByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(
      userId,
      { password: hashedPwd },
      { new: true }
    );
    return res.status(201).json({ message: `Password updated: ${user}` });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

const getUserLocation = async (req, res) => {
  try {
    const userId = req.user;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const defaultLocation = user.userDefaultLocation;

    if (!defaultLocation) {
      res.status(400).json({ message: "Location not found" });
    }

    return res.json(200).json({
      defaultLocation: defaultLocation,
      message: "Location found succesfully",
    });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

module.exports = {
  getUserById,
  updateUsernameByUserId,
  updatePasswordByUserId,
  getUserLocation,
};

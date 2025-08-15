const User = require('../models/User');
const bcrypt = require('bcrypt');

const getUserById = async (req, res) => {
    try {
        if (!req?.params?.id) {
            return res.status(400).json({ 'message': 'ID is required' });
        }
        const userId = req.params.id;
        const user = await User.findById(userId).exec();
        if (!user) {
            return res.status(204).json({ 'message': 'no user matches id' });
        }
        return res.json(user);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};

const updateUsernameByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const newUsername = req.body;

        const user = await User.findByIdAndUpdate(userId, {username: newUsername});
        return res.status(201).json({ "message": `Username updated: ${user}`});
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};

const updateEmailByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const newEmail = req.body;

        const user = await User.findByIdAndUpdate(userId, {email: newEmail});
        return res.status(201).json({ "message": `Username updated: ${user}`});
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};

const updatePasswordByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const newPassword = req.body;

        const hashedPwd = await bcrypt.hash(newPassword, 10);

        const user = await User.findByIdAndUpdate(userId, {password: hashedPwd});
        return res.status(201).json({ "message": `Username updated: ${user}`});
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};


module.exports = {
    getUserById,
    updateUsernameByUserId,
    updateEmailByUserId,
    updatePasswordByUserId
}
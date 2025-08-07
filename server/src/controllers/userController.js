const User = require('../models/User');

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

module.exports = {
    getUserById
}
const User = require('../models/User');

const handleLogout = async (req, res) => {
    // na frontendzie rowniez trzeba usunac accessToken!!!!!!!!!!!!!!!!!!
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) {
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            return res.sendStatus(204); 
        }
        const refreshToken = cookies.jwt;
        
        const foundUser = await User.findOne({ refreshToken }).exec();
        if (!foundUser) {
            return res.sendStatus(204);
        }
        foundUser.refreshToken = '';
        const result = await foundUser.save();
        
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //potem jeszcze secure: true
        res.sendStatus(204);
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = { handleLogout };

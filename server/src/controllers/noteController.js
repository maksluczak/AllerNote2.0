const User = require('../models/User');
const Note = require('../models/Note');

const addNote = async (req, res) => {
    try {
        const userId = req.user; 
        const user = await User.findById(userId).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const { well_being, headache, runny_nose, itchy_nose, itchy_eyes, cough, free_note, note_date } = req.body;

        const note = await Note.create({
            noteUser: user._id, 
            well_being: well_being || 0,
            headache: headache || 0,
            runny_nose: runny_nose || 0,
            itchy_nose: itchy_nose || 0,
            itchy_eyes: itchy_eyes || 0,
            cough: cough || 0,
            free_note: free_note || "",
            note_date: note_date
        });

        user.userNotes.push(note._id);
        await user.save();

        return res.status(201).json({
            message: "Note added successfully.",
            note: note
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during note creation." });
    }
};

const getNoteByDate = async (req, res) => {
    try {
        const userId = req.user;
        const { note_date } = req.body;

        const note = await Note.findOne({ noteUser: userId, note_date });
        return res.status(200).json({ 
            message: "Note found succesfully.",
            note: note 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred, note cannot be find." });
    }
};

module.exports = { 
    addNote, 
    getNoteByDate
};
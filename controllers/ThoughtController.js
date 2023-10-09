const { User, Thought } = require('../models/index.js');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            console.log(thoughts)
            res.json(thoughts);
        } catch (err) {
            res.status(500).json({message: 'Uh oh, no thoughts in this head!'});
        }
    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findById(
                { _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json(
                    { message: 'Uh oh, no thought in this head!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json(
                    { message: 'Uh oh, no user found with this id!' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                req.body, { new: true });

            if (!thought) {
                return res.status(404).json({ message: 'Uh oh, no thought in this head!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId }, req.body, { new: true });

            if (!thought) {
                return res.status(404).json({ message: 'Uh oh, no thought in this head!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'Uh oh, no thought in this head!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'Uh oh, no thought in this head!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
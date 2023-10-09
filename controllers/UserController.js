const { User, Thought } = require('../models/index.js');

module.exports = { 
    async getUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const users = await User.findById({ _id: req.params.userId })

            
            if (!users) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const users = await User.create(req.body);
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { _id: req.params.userId }, 
                req.body, { new: true });

            if (!users) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const users = await User.findOneAndDelete({ _id: req.params.userId });

            if (!users) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }

            await Thought.deleteMany({ _id: { $in: users.thoughts } });
            res.json({ message: 'User and associated thoughts deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId }},
                { new: true }
            );

            if (!users) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(users);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async removeFriend(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            if (!users) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}; 
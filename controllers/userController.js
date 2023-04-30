const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId }) //not sure about params syntax
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true },
  )
      .then((result) =>
          !result
              ? res.status(400).json({ message: 'Could not add friend.' })
              : res.json(result)
      )
      .catch((err) => res.status(500).json(err));
  },
  // remove (delete) friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true },
  )
      .then((result) =>
          !result
              ? res.status(400).json({ message: 'Could not find user with that id' })
              : res.json(result)
      )
      .catch((err) => res.status(500).json(err));
  },
  // update user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { ...req.body },
      { new: true },
  )
      .then((result) =>
          !result
              ? res.status(400).json({ message: 'Something went wrong! Try again.' })
              : res.json(result)
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
    .then((user) =>
        !user
            ? res.status(400).json({ message: 'Could not find user with that id' })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
    )
    .then(() => res.json({ message: 'Deleted user and user thought data' })) //sounds a bit sinister...
    .catch((err) => res.status(500).json(err));
  }
};



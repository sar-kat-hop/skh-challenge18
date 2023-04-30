const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    addFriend,
    deleteFriend,
    updateUser,
    deleteUser
} = require('../../controllers/userController.js');

// from acceptance criteria:
  ///api/users

// GET all users
router.route('/')
  .get(getUsers);

// GET, PUT (update), DELETE one user by id
router.route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

// POST a new user
router.route('/')
  .post(createUser);

// /api/users/:userId/friends/:friendId
  
// POST to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId')
  .post(addFriend);

// DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId')
  .delete(deleteFriend);


module.exports = router;
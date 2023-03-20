const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  addFriend, 
  removeFriend
} = require('../../controllers/userController.js');

router.route('/api/'); // or should it be just ('/') instead?

// from acceptance criteria:
  ///api/users
// GET all users
router.route('/users').get(getUsers); //see comment/question above... test whether this needs to be '/api/users' or not

// GET a single user by its _id ...
router.route('/users/:userId').get(getSingleUser);
    // ...and populated thought and friend data (TODO:)

// POST a new user (i.e. seed a new user? Instructions don't include making form to create new user)
router.route('/users/new-user').get(getUsers).post(createUser); // users/new-user probably isn't necessary... probably ok to POST from just /users

//should this be in a separate or different file??? (friendsRoutes maybe? where do I specify the endpoint for friends?)
  // /api/users/:userId/friends/:friendId
  
// POST to add a new friend to a user's friend list
router.route('/users/:userId/friends/:friendId').get(getSingleUser).post(addFriend); //need to define addFriend in userController.js I think

// DELETE to remove a friend from a user's friend list
router.route('/users/:userId/friends/:friendId').get(getSingleUser).delete(removeFriend); //define removeFriend in userController.js?




module.exports = router;
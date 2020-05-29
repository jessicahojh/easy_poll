const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Votes = require('../models/Votes');

// @route     POST /users
// @desc      Regiter a user
// @access    Public
router.post(
  '/add',
  [
    check('username', 'Please add username')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    const photo = "";

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        username,
        email,
        password,
        photo
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     POST /users
// @desc      Edit user's profile photo
// @access    Public
router.post(
  '/editphoto', async (req, res) => {

    console.log("REQ IS", req.body)

    const userId = req.body[0].userId;
    const newPhoto = req.body[1];

    console.log("console logging", userId, newPhoto)

    const updatePhoto = await User.findOneAndUpdate(
        { _id: userId },
        { photo: newPhoto }
    );

    await updatePhoto.save()
    .then(res.json('Updated user photo!'))
  }
);

// @route     GET /users
// @desc      Get a user's ID
// @access    Public

router.get(
  '/getid',
  async (req, res) => {

    try {
      let user = await User.findOne(req.body);

      if (user) {
        return res.json(user._id);
      }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route     DELETE /users
// @desc      Delete a user
// @access    Public

router.delete(
  '/delete',
  async (req, res) => {

    try {
      let user = await User.findOne(req.body);

      if (user) {
        await User.findOneAndDelete(req.body);
        return res.json({ msg: 'User exists and deleted' });
      }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     GET /users
// @desc      Get all question id that the user voted on
// @access    Public

router.get('/getUsersVote',
  async (req, res) => {

    const id = req.query.userId;

    try {
      let userVote = await Votes.find({userId: id});

      if (userVote) {
        return res.json(userVote);
      }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
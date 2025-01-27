const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

//POST new user route (optional, everyone has access)
router.post('/register', auth.optional, (req, res, next) => {
  const { body: user } = req;

  if(!user.username) {
    return res.status(422).json({
      error: "username_is_required",
    });
  }

  if(!user.password) {
    return res.status(422).json({
      error: "password_is_required",
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/current', auth.required, (req, res, next) => {
  const { body } = req;
  const id = body.id;
  const film = body.film;
  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      user.addFilm(film)

      return res.json({ user: user.toAuthJSON() });
    });
});

//POST login route (optional, everyone has access)
router.delete('/current', auth.required, (req, res, next) => {
  const { body } = req;
  const id = body.id;
  const film = body.film;
  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      user.removeFilm(film)

      return res.json({ user: user.toAuthJSON() });
    });
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: user } = req;

  if(!user.username) {
    return res.status(422).json({
      error: "username_is_required",
    });
  }

  if(!user.password) {
    return res.status(422).json({
      error: " password_is_required",
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return res.status(400).json({...info});
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  username: String,
  films: [String],
  hash: String,
  salt: String,
});

UsersSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UsersSchema.methods.addFilm = function (film) {
  let index = this.films.findIndex((f) => f === film);
  if (index === -1) {
    this.films = [...this.films, film]
    this.save()
  }
};

UsersSchema.methods.removeFilm = function (film) {
  let index = this.films.findIndex((f) => f === film);
  if (index !== -1) {
    this.films.splice(index, 1)
    this.save()
  }
};

UsersSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    username: this.username,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    films: this.films,
    username: this.username,
    token: this.generateJWT(),
  };
};

mongoose.model('Users', UsersSchema);
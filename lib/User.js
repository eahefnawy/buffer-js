'use strict';

var Base = require('./Base.js');

function User(opts) {
  if (!(this instanceof User)) {
    return new User(opts);
  }
  
  this.opts = opts;
}

User.prototype = Object.create(Base.prototype);

User.prototype.get = function (callback) {
  if (!callback || !(callback instanceof Function))
    throw new Error('Please provide a valid callback function.');
    
  this._http('user.json', 'GET', null, callback);
};

module.exports = User;

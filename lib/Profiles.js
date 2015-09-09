'use strict';

var Base = require('./Base.js');

function Profiles(opts) {
  if (!(this instanceof Profiles)) {
    return new Profiles(opts);
  }

  this.opts = opts;
}

Profiles.prototype = Object.create(Base.prototype);

Profiles.prototype.all = function(callback) {
  this._http('profiles.json', 'GET', null, callback);
};

Profiles.prototype.get = function(callback) {
  this._http('profiles/' + this.opts.profile_id + '.json', 'GET', null, callback);
};

Profiles.prototype.schedules = function(callback) {
  this._http('profiles/' + this.opts.profile_id + '/schedules.json', 'GET', null, callback);
};

Profiles.prototype.updateSchedules = function(params, callback) {
  this._http('profiles/' + this.opts.profile_id + '/schedules/update.json', 'POST', params, callback);
};

Profiles.prototype.pendingUpdates = function(params, callback) {
  this._http('profiles/' + this.opts.profile_id + '/updates/pending.json', 'GET', params, callback);
};

Profiles.prototype.sentUpdates = function(params, callback) {
  this._http('profiles/' + this.opts.profile_id + '/updates/sent.json', 'GET', params, callback);
};

Profiles.prototype.reorderUpdates = function(params, callback) {
  this._http('profiles/' + this.opts.profile_id + '/updates/reorder.json', 'POST', params, callback);
};

Profiles.prototype.shuffleUpdates = function(params, callback) {
  this._http('profiles/' + this.opts.profile_id + '/updates/reorder.json', 'POST', params, callback);
};

module.exports = Profiles;

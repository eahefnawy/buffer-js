Node.js Wrapper for the Buffer API
==================================
This Node package makes working with the Buffer API a breeze!
A little present for the awesome Buffer team & the happy community :)

The package was design with simplicity and extendability in mind. In other words, it's object oriented! It's so simple that I thought writing test code would be an overkill!

## Installation
To get started, just...
```
npm install buffer-js
```

## Usage
You'll need an access token to start using the Buffer API, you can either use the single-time access token provided by Buffer when you [created the application](https://buffer.com/developers/apps/create) for your own usage only, or you can request access tokens using OAUTH 2.0, which is beyond the scope of this package. But here's a hint! You can use [Passport](http://passportjs.org) + [Buffer Strategy](passport-bufferapp) ;)

NOTE: the params object literal that you may need to pass varries by method. Check the [Buffer API docs](https://buffer.com/developers/api) for more info.

```
var Buffer = require('buffer-js');

var callback = function(body) {
  console.log(body);
};

// Check the Buffer API docs to pass the right parameters
// based on the method you're calling
var params = {
  ...
  ...
}



var opts = {
  access_token: 'ACCESS_TOKEN'
};
var User = new Buffer.User(opts);
User.get(callback);
var Links = new Buffer.Links(opts);
Links.get(params, callback);
var Info = new Buffer.Info(opts);
Info.get(callback);



var opts = {
  access_token: 'ACCESS_TOKEN',
  profile_id: 'PROFILE_ID'
};
Profiles = new Buffer.Profiles(opts);
Profiles.all(callback); // doesn't need profile_id
Profiles.get(callback);
Profiles.schedules(callback);
Profiles.updateSchedules(params, callback);
Profiles.pendingUpdates(params, callback);
Profiles.sentUpdates(params, callback);
Profiles.reorderUpdates(params, callback);
Profiles.shuffleUpdates(params, callback);



var opts = {
  access_token: 'ACCESS_TOKEN',
  update_id: 'UPDATE_ID'
};
Updates = new Buffer.Updates(opts);
Updates.create(params, callback); // doesn't need update_id
Updates.get(callback);
Updates.interactions(params, callback); 
Updates.update(params, callback); 
Updates.share(callback);
Updates.destroy(callback);
Updates.moveTop(callback);
```

Meteor.publish('contacts', function() {
  return Contacts.find();
});

Meteor.publish('contact', function(_id) {
  return Contacts.find({_id: _id});
});


Meteor.publish('registers', function() {
  return Registers.find();
});

Meteor.publish('register', function(_id) {
  return Registers.find({_id: _id});
});

  Registers.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    }
  });

  Meteor.publish('newRegister', function() {
    return Registers.find();
  });

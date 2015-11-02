//************START: Shareup ************
STATES = [
  'AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];


Registers = new Mongo.Collection('registers');
// var registerCursor = Registers.find();
//     console.log( registerCursor.next() );
// var curRegister;
// while ( registerCursor.hasNext() ) {
//     curRegister = registerCursor.next();
//     console.log( curRegister.config.name );
// }

Registers.before.insert(function (userId, doc) {
  // NewRegister = new Mongo.Collection(doc.config.name);
  // console.log(doc.config.name+"There");
  // NewRegister.attachSchema(new SimpleSchema({
  //   "f1" : {
  //     type : String  },
  //   "f2" : {
  //     type : Number  }
  //
  // }));
  // doc.schemaObject = NewRegister;
  //doc.avatarUrl = 'https://randomuser.me/api/portraits/thumb/' + gender + '/' + num + '.jpg';
});

Registers.attachSchema(new SimpleSchema({
  config: {
    type: Object
  },
  'config.name': {
    type: String,
    label: 'Register Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Register Name'
    },
    max: 200
  },
  'config.desc': {
    type: String,
    label: 'Register Description',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Register Description'
    },
    max: 200
  },
  fields: {
    type: [Object]
  },
  'fields.$.name': {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Field Name'
    }
  },
  'fields.$.type': {
    type: String,
    label: 'Label',
    autoform: {
      options: [
        {value: 'String', label: 'String'},
        {value: 'Number', label: 'Number'},
        {value: 'Date', label: 'Date'},
        {value: 'Password', label: 'Password'}
      ]
    }
  },
  priority: {
    type: String,
    optional: true,
    autoform: {
      options: [
        {value: 'High', label: 'High'},
        {value: 'Medium', label: 'Medium'},
        {value: 'Low', label: 'Low'}
      ],
      type: 'select-radio'
    }
  }
}));
// ***********END: Shareup ***********

STATES = [
  'AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

Contacts = new Mongo.Collection('contacts');

Contacts.before.insert(function (userId, doc) {
  var gender = Random.choice(['men', 'women']);
  var num = _.random(0, 50);
  doc.avatarUrl = 'https://randomuser.me/api/portraits/thumb/' + gender + '/' + num + '.jpg';
});

Contacts.attachSchema(new SimpleSchema({
  name: {
    type: Object
  },
  'name.first': {
    type: String,
    label: 'First Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'First Name'
    },
    max: 200
  },
  'name.last': {
    type: String,
    label: 'Last Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Last Name'
    },
    max: 200
  },
  emails: {
    type: [Object]
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Email Address'
    }
  },
  'emails.$.label': {
    type: String,
    label: 'Label',
    autoform: {
      options: [
        {value: 'Work', label: 'Work'},
        {value: 'Home', label: 'Home'},
        {value: 'School', label: 'School'},
        {value: 'Other', label: 'Other'}
      ]
    }
  },
  priority: {
    type: String,
    optional: true,
    autoform: {
      options: [
        {value: 'High', label: 'High'},
        {value: 'Medium', label: 'Medium'},
        {value: 'Low', label: 'Low'}
      ],
      type: 'select-radio'
    }
  },
  location: {
    type: Object
  },
  'location.city': {
    type: String,
    max: 200
  },
  'location.state': {
    type: String,
    autoform: {
      options: _.map(STATES, function (state) {
        return {label: state, value: state};
      })
    }
  },
  details: {
    type: Object
  },
  'details.notes': {
    type: String,
    label: 'Notes',
    optional: true,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  'details.active': {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  avatarUrl: {
    type: String,
    optional: true
  }
}));

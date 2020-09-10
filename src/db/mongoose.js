const mongoose = require('mongoose');
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';
const { isEmail } = require('validator');

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age cannot be less than 0');
      }
    }
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!isEmail(value)) {
        throw new Error('Not a valid email')
      }
    }
  },
  password: {
    type: String,
    minlength: 7,
    trim: true,
    required: true,
    validate(value) {
      if(value.toLowerCase().includes('password')) {
        throw new Error('Password cannot include password')
      }
    }
  }
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const me = new User({
  name: '    Andrew    ',
  email: 'A@a.co',
  password: '1234567'
});

const task =  new Task({
  description: '    Pot Plants     '
});

// me.save()
//   .then(result => console.log(result))
//   .catch(error => console.log('Error!', error));

task.save()
    .then(task => console.log(task))
    .catch(error => console.log('Error', error));

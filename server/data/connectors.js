import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://localhost/testdb');

const TodoSchema = Mongoose.Schema({
  id: String,
  type: String,
});

const Todo = Mongoose.model('todos', TodoSchema);

export { Todo };

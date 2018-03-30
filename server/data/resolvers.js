import { Todo } from './connectors';

const resolvers = {
  Query: {
    todos(_, args) {
      return Todo.find().then(todos => todos);
    },
    // todo(_, args) {
    //   return Todo.findOne({_id: args._id}).then(todo => todo);
    // }
  },
  Mutation: {
    add_todo: (_, args) => {
      let newTodo = new Todo({ type: args.type });
      newTodo.save((err, saved) => {
        if (err) console.log(`Error adding todo: ${err.messages}`);
        else newTodo = saved;
      });
      return newTodo;
    },
    update_todo: (_, args) => {
      return Todo.findById(args._id, err => err && console.log(`Error reading todo: ${err.messages}`)).then(todo => {
        todo.type = args.type;
        todo.save(err => err && console.log(`Error saving todo: ${err.messages}`));
        return todo;
      });
    },
  },
};

export default resolvers;

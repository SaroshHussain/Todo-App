import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="mt-6 space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
         
        />
      ))}
    </div>
  );
}

export default TodoList;
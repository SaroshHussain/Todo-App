function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
      
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5"
        />

        <span
          className={
            todo.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-sm font-medium text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
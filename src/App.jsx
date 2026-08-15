import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //.filter() creates a new array containing only the items that pass the condition.
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return todo;
  });

  //remaining todos count
  const remainingTodos = todos.filter(
    (todo) => !todo.completed).length;  // means find all complete todos and then count them

  // Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Complete / uncomplete a todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  //clear completed todos
  const clearCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => !todo.completed)
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            My Productivity
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            My Tasks
          </h1>

          <p className="mt-2 text-slate-500">
            Stay organized. Get things done.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          {/* Add Todo */}
          <TodoForm addTodo={addTodo} />

          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-2">

            <button
              onClick={() => setFilter("all")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${filter === "all"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("active")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${filter === "active"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              Active
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${filter === "completed"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              Completed
            </button>

          </div>

          {/* Todo List */}
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />

          {/* Bottom Bar */}
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-slate-500">
              {remainingTodos}{" "}
              {remainingTodos === 1 ? "task" : "tasks"} remaining
            </p>

            <button
              onClick={clearCompleted}
              className="text-left text-sm font-medium text-red-500 transition hover:text-red-700 sm:text-right"
            >
              Clear completed
            </button>

          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Built with React
        </p>

      </div>
    </div>
  );
}

export default App;
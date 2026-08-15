import { useState} from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim() === "") return;

        addTodo(text);

        setText("");
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input 
            type = "text"
            placeholder = "what needs to be done?"
            value= {text}
            onChange= {(e) => setText(e.target.value)}
            className = "flex-1 rounded-x1 border border-gray-300 px-4 py-3 ouline-none focus:border-black"
            />
            <button type="submit" className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 rounded-x1"> Add </button>
            </form>
    );
}

export default TodoForm;
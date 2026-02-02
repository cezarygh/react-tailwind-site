import { useState } from "react";
import ToDoItem from "./ToDoItem";


const ToDoList = () => {
    const [taskItem, setTaskItem] = useState("");
    const [taskList, setTaskList] = useState<string[]>([]);

    function handleSubmit() {
        if (!taskItem.trim()) return;
        setTaskList(prev => [...prev, taskItem]);
        setTaskItem("");
    }

    function handleDelete(id: number) {
        setTaskList(prev => prev.filter((_, index) => index !== id));
    }   

    return (
        <div className="module-wrap module-inner">
            <div className="max-w-md mx-auto rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                To-Do List
                </h2>
                <p className="mt-2 text-slate-600">
                A simple example of managing a list with React state.
                </p>

                {/* Input */}
                <div className="mt-6 flex gap-3">
                    <input
                        type="text"
                        onChange={(e) => setTaskItem(e.target.value)}
                        value={taskItem}
                        placeholder="Add a task"
                        className="flex-1 border border-slate-300 rounded-lg px-4 py-2
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white font-medium
                                hover:bg-blue-700 transition"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>

               {taskList.map((task, index) => (
                <ToDoItem
                    key={index}
                    id={index}
                    text={task}
                    onDelete={handleDelete}
                />
                ))}
          
        </div>
    );
}

export default ToDoList;
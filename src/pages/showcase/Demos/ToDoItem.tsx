type ToDoItemProps = {
  id: number;
  text: string;
  onDelete: (id: number) => void;
};

const ToDoItem = ({ id, text, onDelete }: ToDoItemProps) => {
  return (
    <div className="mt-4 max-w-md mx-auto rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between gap-4">
  
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-400">
            #{id}
          </span>
          <p className="text-slate-900 font-medium">
            {text}
          </p>
        </div>

        <button
          onClick={() => onDelete(id)}
          className="rounded-lg bg-red-500 px-3 py-1.5 text-sm font-medium text-white
                     hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
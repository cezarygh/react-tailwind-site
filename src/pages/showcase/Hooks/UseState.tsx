import { useState } from "react"

const UseStateHook = () => {
  const [count, setCount] = useState<number>(0)

  return (

<div className="module-wrap module-inner">
    <div className="max-w-md mx-auto rounded-xl border border-slate-300 bg-white p-6">
      <h2 className="text-xl font-semibold text-slate-900">
        useState hook – Basic Example
      </h2>

      <p className="mt-2 text-slate-600">
        This example demonstrates how <code className="font-mono">useState</code> stores
        and updates component state.
      </p>

      {/* Current value */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-slate-500">Current value</span>
        <span className="text-3xl font-bold text-slate-900">
          {count} 
        </span>
      </div>

      {/* Buttons */}
      {/* prevCount = parameter */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-white
                     hover:bg-slate-800 transition"
        >
          - 1
        </button>

        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2
                     text-slate-700 hover:bg-slate-100 transition"
        >
          + 1
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="mt-4 w-full text-sm text-slate-500 hover:text-slate-700 transition"
      >
        Reset
      </button>
    </div>
  </div>
  )
}

export default UseStateHook
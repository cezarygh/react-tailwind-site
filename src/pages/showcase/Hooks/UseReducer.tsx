import { useReducer, useState } from "react"

interface State {
  balance: number
}

type Action =
  | { type: "add"; payload: number }
  | { type: "minus"; payload: number }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return { ...state, balance: state.balance + action.payload }
    case "minus":
      return { ...state, balance: state.balance - action.payload }
    default:
      return state
  }
}

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { balance: 0 })
  const [amount, setAmount] = useState<number>(0)

  return (
    <div className="module-wrap module-inner">
        <div className="max-w-md mx-auto rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
            useReducer – Simple Bank Example
        </h2>
        <p className="mt-2 text-slate-600">
            This example demonstrates how <code className="font-mono">useReducer</code> manages
            complex state updates.
        </p>

        {/* Display balance */}
        <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-500">Current Balance</span>
            <span className="text-3xl font-bold text-slate-900">${state.balance}</span>
        </div>

        {/* Input */}
        <div className="mt-6">
            <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
            <button
            onClick={() => dispatch({ type: "add", payload: amount })}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium
                        hover:bg-blue-700 transition"
            >
            Deposit
            </button>
            <button
            onClick={() => dispatch({ type: "minus", payload: amount })}
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-700 font-medium
                        hover:bg-slate-100 transition"
            >
            Withdraw
            </button>
        </div>

        {/* Reset */}
        <button
            onClick={() => dispatch({ type: "add", payload: -state.balance })}
            className="mt-4 w-full text-sm text-slate-500 hover:text-slate-700 transition"
        >
            Reset Balance
        </button>
        </div>
    </div>
  )
}

export default UseReducerHook
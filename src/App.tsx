import { useEffect, useReducer, useState } from "react";

import logo from "./assets/logo.png";
import { PlusCircle } from "lucide-react";
import { List } from "./components/list";
import { todosReducer } from "./reducers/todos/reducer";
import { addNewTodoAction } from "./reducers/todos/actions";

function App() {
  const [todoDescription, setTodoDescription] = useState("");
  const [todosState, todosDispatch] = useReducer(todosReducer, {
    todos: [],
  },
  (todosState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@todoApp:todos-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return todosState
  },
);

  function createNewTodo() {
    const newTodo = {
      id: Math.random().toString(36).substring(7),
      description: todoDescription,
      completed: false,
    };

    todosDispatch(addNewTodoAction(newTodo));
  }

  useEffect(() => {
    console.log('useEffect todosState',todosState)
    if (todosState) {
      const stateJSON = JSON.stringify(todosState)
      console.log("🚀 ~ useEffect ~ stateJSON:", stateJSON)

      localStorage.setItem('@todoApp:todos-state-1.0.0', stateJSON)
    }
  }, [todosState])

  return (
    <div className="h-screen w-full bg-gray-600">
      <div className="h-[200px] w-full bg-gray-700 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-auto flex-1 max-w-[736px] h-full">
        <div className="h-[54px] w-full mt-[-27px]">
          <div className="h-full flex items-center gap-2 p-0.5">
            <input
              className="h-full flex-1 p-4 rounded-lg bg-gray-500 text-gray-200 
              placeholder:text-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Adicione uma nova tarefa"
              onChange={(e) => setTodoDescription(e.target.value)}
            />
            <button
              className="
            h-full w-[90px] flex items-center justify-center gap-1
             bg-blue-400 text-white font-bold
            rounded-lg
            "
              onClick={() => createNewTodo()}
            >
              Criar
              <PlusCircle size={20} />
            </button>
          </div>
        </div>

        <List todos={todosState.todos} dispatch={todosDispatch} />
      </div>
    </div>
  );
}

export default App;

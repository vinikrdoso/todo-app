import { Check, ClipboardList, Trash2 } from "lucide-react";
import { Badge } from "./badge";
import {
  deleteTodoAction,
  markTodoAsCompletedAction,
  type Actions
} from "../reducers/todos/actions";
import type { Dispatch } from "react";

type Todo = {
  id: string;
  description: string;
  completed: boolean;
};

interface ListProps {
  todos: Todo[];
  dispatch: Dispatch<Actions>;
}

export function List({ todos, dispatch }: ListProps) {
  function handleCheckTodo(id: string) {
    dispatch(markTodoAsCompletedAction(id));
  }

  function deleteTodo(id: string) {
    dispatch(deleteTodoAction(id));
  }

  const quantity = todos.length
  const completed = todos.reduce((acc, todo) => {
    return todo.completed ? acc + 1 : acc
  }, 0)

  return (
    <div className="w-full mt-16">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="text-blue-400 font-bold">Tarefas criadas</span>
          <Badge quantity={quantity} />
        </div>
        <div className="flex gap-2">
          <span className="text-purple-400 font-bold">Concluídas</span>
          <Badge quantity={quantity} completed={completed} prefix />
        </div>
      </div>

      {todos.length > 0 ? (
        <div className="mt-6 flex flex-col gap-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex h-[72px] bg-gray-500 rounded-lg p-4  justify-between gap-3"
            >
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckTodo(todo.id)}
                  className=" relative peer shrink-0 appearance-none w-5 h-5 
                  border-2 border-blue-400 rounded-full bg-transparent mt-1
                              checked:bg-blue-600 checked:border-0"
                />
                <Check
                  className="text-white absolute w-3.5 h-3.5 mt-[8px] ml-[3px]
                            hidden peer-checked:block pointer-events-none"
                />
              </div>
              <span className="flex-1 text-gray-100 text-sm">
                {todo.description}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-300 flex align-top"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center justify-center py-16 px-6 border-t-2 rounded-lg border-gray-400">
          <ClipboardList className="text-gray-300 mb-4" size={56} />
          <p className="text-gray-300 font-bold text-base">
            Você ainda não tem tarefas cadastradas
          </p>
          <span className="text-gray-300 text-base">
            Crie tarefas e organize seus itens a fazer
          </span>
        </div>
      )}
    </div>
  );
}

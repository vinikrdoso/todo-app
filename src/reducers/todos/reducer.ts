import { ActionTypes, type Actions } from './actions'
import { produce } from 'immer'

export interface Todo {
  id: string
  description: string
  completed: boolean
}

interface TodosState {
  todos: Todo[]
}

export function todosReducer(state: TodosState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TODO:
      return produce(state, (draft) => {
        draft.todos.push(action.payload.todo)
      })
    case ActionTypes.DELETE_TODO: {
      const currentTodo = state.todos.findIndex((todo) => {
        return todo.id === action.payload.id
      })

      if (currentTodo < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.todos.splice(currentTodo, 1)
      })
    }
    case ActionTypes.MARK_TODO_AS_COMPLETED: {
      const currentTodo = state.todos.findIndex((todo) => {
        return todo.id === action.payload.id
      })

      if (currentTodo < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.todos[currentTodo].completed = !draft.todos[currentTodo].completed
      })
    }
    default:
      return state
  }
}

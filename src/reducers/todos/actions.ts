import { Todo } from "./reducer";

export enum ActionTypes {
  ADD_NEW_TODO = "ADD_NEW_TODO",
  DELETE_TODO = "DELETE_TODO",
  MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED",
}

export type Actions =
| {
    type: ActionTypes.ADD_NEW_TODO
    payload: {
      todo: Todo
    }
  }
| {
    type: ActionTypes.DELETE_TODO
    payload: {
      id: string
    }
  }
| {
    type: ActionTypes.MARK_TODO_AS_COMPLETED
    payload: {
      id: string
    }
  }


export function addNewTodoAction(todo: Todo) {
  return {
    type: ActionTypes.ADD_NEW_TODO,
    payload: {
      todo,
    },
  } satisfies Actions
}

export function deleteTodoAction(id: string) {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: {
      id,
    },
  } satisfies Actions
}

export function markTodoAsCompletedAction(id: string) {
  return {
    type: ActionTypes.MARK_TODO_AS_COMPLETED,
    payload: {
      id,
    },
  } satisfies Actions
}

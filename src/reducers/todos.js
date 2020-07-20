import { todo } from './todo'

export const todos = (state = [], action) => {
  console.log('Action :', action)
  console.log('State :', state)
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(state, action)]
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action))
    default:
      return state
  }
}

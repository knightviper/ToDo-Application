import React, { useState } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { FilterLink } from './FilterLink'
import styles from './index.scss'

let taskID = 0;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed)
    default:
      return todos
  }
}

const App = ({ todos, visibilityFilter, dispatch }) => {
  const [task, setTask] = useState('')
  const updateInput = (e) => {
    setTask(e.target.value)
  }
  console.log('Hello')
  const addTask = () => {
    dispatch({
      type: 'ADD_TODO',
      id: taskID++,
      text: task,
    })
    setTask('')
  }

  const toggleTask = (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    })
  }

  let todosLists = getVisibleTodos(todos, visibilityFilter)

  return (
    <div className={styles.App}>
      <input type="text" value={task} onChange={updateInput} />
      <button style={{ marginLeft: 5 }} onClick={addTask}>
        Add
      </button>
      <div>
        <ul>
          {todosLists.map((todo) => {
            return (
              <li
                style={{}}
                key={todo.id}
                className={classnames({ [styles.list]: todo.completed })}
                onClick={() => toggleTask(todo.id)}
              >
                {todo.text}
              </li>
            )
          })}
        </ul>
      </div>
      <FilterLink filter={'SHOW_ALL'} dispatch={dispatch}>
        All
      </FilterLink>
      <FilterLink filter={'SHOW_COMPLETED'} dispatch={dispatch}>
        Completed
      </FilterLink>
      <FilterLink filter={'SHOW_ACTIVE'} dispatch={dispatch}>
        Active
      </FilterLink>
    </div>
  )
}

const mapStateToProps = ({ todos, visibilityFilter }) => {
  return {
    todos,
    visibilityFilter,
  }
}
export default connect(mapStateToProps)(App)

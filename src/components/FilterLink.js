import React from 'react'

export const FilterLink = ({ filter, children, dispatch }) => {
  const onFilterClick = (filter) => {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter,
    })
  }
  return (
    <a style={{ marginLeft: 5 }} href="#" onClick={() => onFilterClick(filter)}>
      {children}
    </a>
  )
}

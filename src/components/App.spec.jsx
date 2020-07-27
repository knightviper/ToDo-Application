import React from 'react'
import { mount } from 'enzyme'
import App from './App.jsx'

const data = {
  todos: [
    {
      id: 1,
      text: 'hello',
      completed: true,
    },
  ],
  visibilityFilter: 'SHOW_ALL',
}

describe('ToDo Application :', () => {
  it('renders a simple component', () => {
    const instance = mount(<App {...data} />)
  })
})

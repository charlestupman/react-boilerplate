import React from 'react'
import ReactDOM from 'react-dom'

export const Application = ({}) =>
  <div>
    Hello World
  </div>

const wrapper = document.getElementById('application')
wrapper && ReactDOM.render(<Application />, wrapper) // eslint-disable-line
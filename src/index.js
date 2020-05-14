import React from 'react'
import { render } from 'react-dom'

import './style/main.scss'

import App from './App.js'

if (module && module.hot) {
  module.hot.accept()
}

render(
  <App />,
  document.getElementById('root')
)

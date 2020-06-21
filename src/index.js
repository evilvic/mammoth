import React from 'react'
import ReactDOM from 'react-dom'

const DummyComponent = () => <h1>Hey!</h1>

ReactDOM.render(
  <React.StrictMode>
    <DummyComponent/>
  </React.StrictMode>,
  document.getElementById('root')
)

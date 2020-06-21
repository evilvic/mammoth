import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyles from './styles/globalStyles'

const DummyComponent = () => <h1>Hey!</h1>

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <DummyComponent/>
  </React.StrictMode>,
  document.getElementById('root')
)

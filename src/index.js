import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import MainProvider from './context'
import Router from './router'
import GlobalStyles from './styles/globalStyles'

const WithContext = () => (
  <BrowserRouter>
    <MainProvider>
      <Router/>
    </MainProvider>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <WithContext/>
  </React.StrictMode>,
  document.getElementById('root')
)

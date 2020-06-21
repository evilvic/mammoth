import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'

export const MainContext = createContext()

class MainProvider extends Component {

  state = {}

  render() {

    const {
      state
    } = this

    return (
      <MainContext.Provider
        value={{
          state
        }}>
        {this.props.children}
      </MainContext.Provider>
    )

  }

}

export default withRouter(MainProvider)
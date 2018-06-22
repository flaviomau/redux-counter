import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './Counter'
import counterReducer from './reducer'

let store = createStore(counterReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>      
    )
  }
}

export default App

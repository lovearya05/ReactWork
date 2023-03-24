import React from 'react'
import { Provider } from 'react-redux'
import Child from './Child'
import store from './Store'

function Home() {
    

  return (
    <Provider store={store}>
      <Child/>
    </Provider>
  )
}

export default Home

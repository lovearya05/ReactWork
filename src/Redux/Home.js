import React from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import { Provider } from 'react-redux';
import {store} from './store'


function Home() {
    

    return (

    <Provider store={store}>
        <Component2/>
        <Component1/>
    
    </Provider>  
      
  )
}

export default Home

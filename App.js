import React from 'react'
import { Provider } from 'react-redux';
import Store from './src/store'
import Navigation  from './src/config/navigation';



export default function App(){
return(
  <>
<Provider store={Store}>
<Navigation/>
</Provider>
 
  </>
)
}


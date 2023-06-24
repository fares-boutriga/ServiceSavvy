import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Example from './components/Example.jsx'


function App() {
  return (
    <div>
      <Example/>
    </div>
  )
}

export default App


ReactDOM.render(<App />, document.getElementById('app'))

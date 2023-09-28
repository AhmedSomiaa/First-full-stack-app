import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
  }, [])

  return (
    <div>
      <h1>recipes</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

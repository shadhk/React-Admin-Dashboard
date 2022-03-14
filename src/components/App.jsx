import React from "react"
import Something from "./Something.jsx"

import "../styles/index.scss"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <div>
          <h1>Hello, ReactJs Developer</h1>
        </div>
      </main>
      <Something />
    </>
  )
}

export default App

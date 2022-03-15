import React from "react"
import Something from "./Something"

import "../styles/index.scss"
import Anything from "./Anything"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <div>
          <h1>Hello, ReactJs Webpack Developer</h1>
        </div>
      </main>
      <Something />
      <Anything />
    </>
  )
}

export default App

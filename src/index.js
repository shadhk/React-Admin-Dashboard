import { render } from "react-dom"
import App from "./components/App.js"

render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}

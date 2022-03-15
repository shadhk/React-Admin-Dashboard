import { useState } from "react"

const myPortfolio = {
  Name: "Shad Khan",
  Qualification: "B.Tech",
  Address: "Bhadohi-221401"
}

const otherDetails = {
  ...myPortfolio,
  Technologies: "ReactJs, NodeJs, ExpresJs, MongoDb",
  Experience: "3.8 years",
  Roles: "ReactJs Developer, FullStack Developer, MernStack Developer"
}
// console.log(myPortfolio)
// console.log(otherDetails)

const Something = () => {
  const [recipe, setRecipe] = useState({ item: "No item available" })
  return (
    <>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(myPortfolio)}>MyPortfolio</button>
      <button onClick={() => setRecipe(otherDetails)}>otherDetails</button>

      <ul>
        {Object.keys(recipe).map(details => (
          <li key={details}>
            {details}: {recipe[details]}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Something

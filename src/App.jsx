import { useState } from "react"

function App() {
  const [price, setPrice] = useState(5)
  const [quantity, setQuantity] = useState(1)

  const result = price * quantity

  return (
    <>
      <button 
        onClick={() => setPrice(price + 1)}
      > 
        + price
      </button> <br/>
      <button 
        onClick={() => setQuantity(quantity + 1)}
      > 
        + quantity
      </button>
      <p>price = {price}</p>
      <p>quantity = {quantity}</p>
      <p>result = {result}</p>
    </>
  )
}

export default App

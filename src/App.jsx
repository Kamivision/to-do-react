import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const generateList = (data) => {
    let container = document.querySelector("#container")
    let h3 = document.createElement("h3")
    h3.innerText = data
    container.appendChild(h3)

    
  }
// handle the submit so it doesn't refresh the page and instead sends the data to generate the list item
   const handleSubmit = (event) => {
    event.preventDefault()
    let data = Object.fromEntries(new FormData(event.target))
    // data = Object.fromEntries(data)
    generateList(data)
  }
// Everything shown on the page
  return (
    <>
      <h1 id='header'>THE TA-DA LIST</h1>
      <form onSubmit={()=>handleSubmit(event)}>
        <input type='text' name='list item' placeholder='list item'/>
        <input type='submit' value='Add'/>
      </form>
      <div id='container'>

      </div>
      
    </>
  )
}

export default App

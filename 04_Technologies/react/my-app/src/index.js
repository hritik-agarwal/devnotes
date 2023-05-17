// Importing Modules
import React, {useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'

// Importing CSS
import './index.css'

// Some Data
const fruits = ['apple', 'mango', 'banana']
const gokuImg = require('./images/goku.jpeg')

// React Component
const Image = props => {
  // Props
  const {imgPath, children} = props
  return (
    <>
      <img src={imgPath} alt='Goku' />
      {/* Rendering Children */}
      {children}
    </>
  )
}

// Root Component
const App = () => {
  // State Variables
  const [name, setName] = useState('')

  // Functions
  const handleFormSubmit = e => {
    e.preventDefault()
    console.log('Form Submitted with name', name)
  }
  const handleInputChange = e => {
    setName(e.target.value)
  }
  const handleButtonClick = () => {
    alert('Button Clicked')
  }

  useEffect(() => {
    alert('Hello')
  }, [])

  // Return JSX
  return (
    <section id='app' className='app' style={{width: '200px'}}>
      {/* React Component */}
      {/* While using image path -> it checks in public folder */}
      <Image imgPath='./images/goku.png'>
        <h1>Goku</h1>
      </Image>
      {/* While importing image, it checks in src folder */}
      <img src={gokuImg} alt='Goku' />

      {/* Printing Lists */}
      {fruits.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      {/* Forms in React */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={handleInputChange}
        />
        <button type='submit' onClick={handleButtonClick}>
          Click Me
        </button>
      </form>
    </section>
  )
}

createRoot(document.getElementById('root')).render(<App />)

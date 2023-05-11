import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()
  // const context = useOutletContext()

  return (
    <div>Book {id}</div>
  )
}

export default Book
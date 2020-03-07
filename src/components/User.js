import React from 'react'

export const User = ({ name, age }) => {
  return (
    <article className='User'>
      {name}, age: {age}
    </article>
  )
}

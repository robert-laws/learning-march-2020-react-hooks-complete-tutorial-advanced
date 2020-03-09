import React, { useContext, useState, useEffect, useRef } from 'react'
import { UsersContext } from '../context/UsersContext';

export const AddUser = () => {
  const { dispatch } = useContext(UsersContext);

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_USER', user: { 
      name, 
      age 
    }});
    setName('');
    setAge(0);
  }

  useEffect(() => {
    // focus input element
    inputRef.current.focus();
  }, [])

  return (
    <section className='AddUser'>
      <form onSubmit={handleSubmit}>
        Name: <input ref={inputRef} type='text' value={name} onChange={e => setName(e.target.value)} /><br/>
        Age: <input type='text' value={age} onChange={e => setAge(e.target.value)} /><br/>
        <input type='submit' value='Add New User' />
      </form>
    </section>
  )
}

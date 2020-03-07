import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/UsersContext';

export const AddUser = () => {
  const { dispatch } = useContext(UsersContext);

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_USER', user: { 
      name, 
      age 
    }});
    setName('');
    setAge(0);
  }
  return (
    <section className='AddUser'>
      <form onSubmit={handleSubmit}>
        Name: <input type='text' value={name} onChange={e => setName(e.target.value)} /><br/>
        Age: <input type='text' value={age} onChange={e => setAge(e.target.value)} /><br/>
        <input type='submit' value='Add New User' />
      </form>
    </section>
  )
}

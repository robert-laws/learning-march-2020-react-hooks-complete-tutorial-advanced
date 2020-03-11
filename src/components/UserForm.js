import React from 'react'
import { useInput } from '../hooks/useInput';

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = event => {
    event.preventDefault();
    console.log(`Hello, ${firstName} ${lastName}!`)
    resetFirstName();
    resetLastName();
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input name='firstName' type="text" {...bindFirstName}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input name='lastName' type="text" {...bindLastName}/>
        </div>
        <input type='submit' value='Make Greeting' />
      </form>
      <h3>{firstName} {lastName}</h3>
    </div>
  )
}

export default UserForm

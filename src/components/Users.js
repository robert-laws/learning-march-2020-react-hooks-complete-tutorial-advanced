import React from 'react'
import { User } from './User';

export const Users = () => {
  const users = [
    {id: 1, name: 'Bob' },
    {id: 2, name: 'Hal' },
    {id: 3, name: 'Mel' },
    {id: 4, name: 'Jim' },
    {id: 5, name: 'Kal' }
  ];

  return (
    <section className='Users'>
      {users.map(user => <User key={user.id} name={user.name} /> )}
    </section>
  )
}

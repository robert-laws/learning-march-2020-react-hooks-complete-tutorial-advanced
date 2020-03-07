import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/UsersContext';
import { User } from './User';

export const Users = () => {
  const { users } = useContext(UsersContext);

  const [ageLowSelection, setAgeLowSelection] = useState(0);
  const [ageHighSelection, setAgeHighSelection] = useState(100);

  return (
    <section className='Users'>
      <select value={ageLowSelection} onChange={event => setAgeLowSelection(event.target.value)}>
        <option value={0}>0</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
        <option value={60}>60</option>
        <option value={70}>70</option>
        <option value={80}>80</option>
        <option value={90}>90</option>
        <option value={100}>100</option>
      </select>

      <select value={ageHighSelection} onChange={event => setAgeHighSelection(event.target.value)}>
        <option value={0}>0</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
        <option value={60}>60</option>
        <option value={70}>70</option>
        <option value={80}>80</option>
        <option value={90}>90</option>
        <option value={100}>100</option>
      </select>
      {
        users.filter(user => user.age > ageLowSelection && user.age < ageHighSelection).sort((a, b) => {return a.age - b.age}).map(user => <User key={user.id} name={user.name} age={user.age} />)
      }
    </section>
  )
}

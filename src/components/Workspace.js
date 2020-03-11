import React from 'react'
import { AddUser } from './AddUser'
import { DataFetch } from './DataFetch'
import { DataFetchWithReducer } from './DataFetchWithReducer'
import { Counter } from './Counter'
import { MyTimer } from './MyTimer'
import { DocTitle } from './DocTitle'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import UserForm from './UserForm'

export const Workspace = () => {
  return (
    <section className='Workspace'>
      <AddUser />
      <hr/>
      <DataFetch />
      <DataFetchWithReducer />
      <hr/>
      <Counter />
      <hr/>
      <MyTimer />
      <hr/>
      <DocTitle />
      <br/>
      <CounterOne />
      <br/>
      <CounterTwo />
      <br/>
      <UserForm />
    </section>
  )
}

import React from 'react'
import { AddUser } from './AddUser'
import { DataFetch } from './DataFetch'
import { DataFetchWithReducer } from './DataFetchWithReducer'
import { Counter } from './Counter'
import { MyTimer } from './MyTimer'

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
    </section>
  )
}

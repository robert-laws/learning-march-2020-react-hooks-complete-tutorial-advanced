import React from 'react'
import { AddUser } from './AddUser'
import { DataFetch } from './DataFetch'
import { DataFetchWithReducer } from './DataFetchWithReducer'
import { Counter } from './Counter'

export const Workspace = () => {
  return (
    <section className='Workspace'>
      <AddUser />
      <hr/>
      <DataFetch />
      <DataFetchWithReducer />
      <hr/>
      <Counter />
    </section>
  )
}

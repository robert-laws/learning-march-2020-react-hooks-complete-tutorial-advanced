import React from 'react'
import { AddUser } from './AddUser'
import { DataFetch } from './DataFetch'

export const Workspace = () => {
  return (
    <section className='Workspace'>
      <AddUser />
      <hr/>
      <DataFetch />
    </section>
  )
}

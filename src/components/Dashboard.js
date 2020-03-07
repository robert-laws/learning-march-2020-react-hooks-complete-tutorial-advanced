import React from 'react'
import { Admin } from './Admin'
import { Workspace } from './Workspace'

export const Dashboard = () => {
  return (
    <section className='Dashboard'>
      <Admin />
      <Workspace />
    </section>
  )
}

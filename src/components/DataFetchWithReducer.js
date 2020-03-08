import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

import { fetchData } from '../data/fetchData';
import { fetchReducer } from '../reducers/FetchReducer';

export const DataFetchWithReducer = () => {
  const [state, dispatch] = useReducer(fetchReducer, fetchData);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/6')
      .then(res => {
        dispatch({type: 'FETCH_SUCCESS', payload: res.data})
      })
      .catch(err => {
        dispatch({type: 'FETCH_ERROR'})
      })
  }, [])

  return (
    <section className='DataFetchWithReducer'>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </section>
  )
}

import { useEffect } from 'react';

export const useDocument = count => {
  useEffect(() => {
    document.title = `Count is ${count}`
  }, [count])
}
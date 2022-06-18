import React, { useEffect } from 'react'

export default function coba() {
    useEffect(() => {
        console.log([...Array(5).keys()]);
    }, [])
  return (
    <div>coba</div>
  )
}

import React from 'react'

export default function Container({children, marginX}) {
  return (
      <div className={`container mx-auto lg:px-${marginX}`}>
          {children}
      </div>
  )
}

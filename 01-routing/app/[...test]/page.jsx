import React from 'react'

const Page = ({params}) => {
  return (
    <div>Page: { params.test}</div>
  )
}

export default Page
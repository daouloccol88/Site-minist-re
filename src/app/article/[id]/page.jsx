import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <div className="container-fluid">
            <h1>Articles</h1>
            <p>ID : {decodeURIComponent(params.id)}</p>
        </div>
    </div>
  )
}

export default page
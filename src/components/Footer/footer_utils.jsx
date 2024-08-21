"use client"

import React from 'react'

const Footer_utils = () => {
  return (
    <div>
      <button className="btn btn-primary float-footer" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample">
        Modifier le Footer
      </button>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Footer</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Do something bro !!!
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer_utils
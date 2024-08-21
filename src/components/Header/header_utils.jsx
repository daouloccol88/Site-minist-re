"use client"

import React, { useState } from 'react'

const Header_utils = ({title, setTitle, menu, setMenu}) => {

  const modifyMenu = () => {
    // Initial array
    let myArray = [10, 20, 30, 40, 50];

    // Index of the element you want to delete
    let indexToDelete = 2; // This will remove the element at index 2 (which is 30)

    // Remove the element
    if (indexToDelete > -1) {
      myArray.splice(indexToDelete, 1);
    }

    console.log(myArray); // Outputs: [10, 20, 40, 50]

  }

  const modifyTitle = (event) => {
    setTitle(event.target.previousElementSibling.value);
    //console.log(event.target.previousElementSibling.value);
     
  }

  return (
    <div>
      <button className="btn btn-primary float-header" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample">
        Modifier le Header
      </button>

      <div className="offcanvas offcanvas-start w-75" tabIndex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Modifier le Header</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className='pb-1'>
            <h4>Modifier le titre du site</h4>
            <p>Le titre actuel est:&nbsp; &nbsp;"<i>{title}</i>"</p>

            <div className="input-group mb-3 w-75">
              <input type="text" className="form-control" placeholder="Entrez le nouveau titre ..." />
              <button className="btn btn-primary" type="button" id="button-title" onClick={modifyTitle}>Button</button>
            </div>
          </div>

          <hr />

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Header_utils
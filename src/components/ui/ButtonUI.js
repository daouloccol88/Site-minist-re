import React from 'react'

const ButtonUI = ({ props, lesClass, handleState }) => {
  return (
    <div className="text-center my-2">
      <button className={lesClass} type="submit" onClick={handleState}>{props}</button>
    </div>
  )
}

export default ButtonUI
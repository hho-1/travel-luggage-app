import React from 'react'

export const PackItem = ({item, onDelete}) => {
  return (
    <>
      <input type='checkbox' id={item.id} />
      <label htmlFor={item.id}>{item.quantity} {item.name}  </label>
      <button onClick={()=>onDelete(item.id)}>&#x274C;</button>
    </>
     
  )
}

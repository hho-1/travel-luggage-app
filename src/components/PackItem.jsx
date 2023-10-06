import React, { useState } from 'react'

export const PackItem = ({item, onDelete, setNumberOfChecked,numberOfChecked, needsList, setPercent, percent}) => {

  const [isChecked, setIsChecked] = useState(false)

  

  return (
    <>
      <input type='checkbox' id={item.id} onClick={()=>setIsChecked(!isChecked)}/>
      <label htmlFor={item.id} > {isChecked ? <s>{item.quantity} {item.name}</s> : <p>{item.quantity} {item.name}</p> }  </label>
      <button onClick={()=>onDelete(item.id)}>&#x274C;</button>
    </>
     
  )
}

import React, { useState } from 'react'

export const PackItem = ({item, onDelete, setNumberOfChecked,numberOfChecked, needsList, setPercent, percent,  checkedList, setCheckedList}) => {

  const [isChecked, setIsChecked] = useState(false)
  

  const checkItem = (item) => {
    const createdChecks = [
        ...checkedList, item
    ];
    setCheckedList(createdChecks)

    if((checkedList?.length === 0) || needsList?.length === 0) setPercent(percent => percent = 0)
    else setPercent((percent)=> percent = Math.floor(checkedList?.length / needsList?.length * 100))
    
  }
  

  return (
    <>
      <input type='checkbox' id={item.id} onClick={()=>{checkItem(item); setIsChecked(!isChecked)}}/>
      <label htmlFor={item.id} > {isChecked ? <s>{item.quantity} {item.name}</s> : <p>{item.quantity} {item.name}</p> }  </label>
      <button onClick={()=>onDelete(item.id)}>&#x274C;</button>
    </>
     
  )
}

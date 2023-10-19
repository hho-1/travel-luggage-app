import React, { useState } from 'react'

export const PackItem = ({item, onDelete, setNumberOfChecked,numberOfChecked, needsList, setPercent, percent,  checkedList, setCheckedList}) => {

  const [isChecked, setIsChecked] = useState(false)
  

  const checkItem = (item) => {
    const createdChecks = [
        ...checkedList, item
    ];
    setCheckedList(createdChecks)
    console.log(checkedList);

    if((checkedList.length === 0) || needsList.length === 0) {
      setPercent(percent => percent = 0)
    }
    else {
      setPercent((percent)=> percent = Math.floor((checkedList && checkedList.length) / (needsList && needsList.length) * 100))
    }
    
  }
  const handleCheck = (e) => {
    if(isChecked){
      console.log(e.target.value);
      checkItem(item)
      setIsChecked(isChecked)
    }
    else{
      setCheckedList(checkedList && checkedList.pop())
      setIsChecked(!isChecked)
    }
  }
  

  return (
    <>
      <input type='checkbox' id={item.id} value={isChecked} onChange={()=>handleCheck()}/>
      <label htmlFor={item.id} > {isChecked ? <s>{item.quantity} {item.name}</s> : <p>{item.quantity} {item.name}</p> }  </label>
      <button onClick={()=>onDelete(item.id)}>&#x274C;</button>
    </>
     
  )
}

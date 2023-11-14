import React, { useEffect, useState } from 'react'

export const PackItem = ({item, onDelete, setNumberOfChecked, setPercent, numberOfChecked, needsList}) => {

  const [isChecked, setIsChecked] = useState(false)
  
  
  useEffect(() => {
  
    if (!isChecked) {
      setNumberOfChecked((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }

        return prevCount;
      });
    }

    if (isChecked) {
      setNumberOfChecked((prevCount) => prevCount + 1);
    }
    
  }, [isChecked, setNumberOfChecked]);

  
  

  const handleCheck = () => {
    
      setIsChecked(!isChecked)
      
      setPercent((percent) => percent = Math.floor(Number(numberOfChecked / needsList.length) * 100))
    
  }
  

  return (
    <>
      <input type='checkbox' id={item.id} checked={isChecked} onChange={handleCheck}/>
      <label htmlFor={item.id} > {isChecked ? <s>{item.quantity} {item.name}</s> : <p>{item.quantity} {item.name}</p> }  </label>
      <button onClick={()=>onDelete(item.id)}>&#x274C;</button>
    </>
     
  )
}

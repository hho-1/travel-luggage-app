import React from 'react'

const Footer = ({needsList, checkedList, percent}) => {


  return (
    <div>
       <p className='stats'><i>📋 You have {needsList?.length} items on your list, and you have already packed {checkedList.length} ({percent}%) </i></p> 
    </div>
  )
}

export default Footer
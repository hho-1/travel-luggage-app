import React from 'react'

const Footer = ({needsList,numberOfChecked, percent}) => {


  return (
    <div>
       <p className='stats'><i>📋 You have {needsList && needsList.length} items on your list, and you have already packed {numberOfChecked} ({percent}%) </i></p> 
    </div>
  )
}

export default Footer
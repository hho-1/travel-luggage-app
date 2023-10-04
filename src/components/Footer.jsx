import React from 'react'

const Footer = ({needsList}) => {
  return (
    <div>
       <p className='stats'><i>📝 You have {needsList.length} items on your list, and you have already packed..</i></p> 
    </div>
  )
}

export default Footer
import React from 'react'

export const AddForm = ({setAmount, setNeedsName, handleSubmit}) => {
    const numbers = []

    for(let i = 1; i <= 40; i++){
        numbers.push(i)
    }

    

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <input type="text" placeholder='item name...' onChange={(e)=>setNeedsName(e.target.value)}/>
        <select onChange={(e)=>setAmount(e.target.value)}>
            {
                numbers.map((item) => <option key={item}>{item}</option>)
            }
        </select>
        <button>ADD</button>
    </form>
  )
}

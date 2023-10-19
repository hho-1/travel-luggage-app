import React from 'react'

export const AddForm = ({amount, setAmount, setNeedsName, handleSubmit, needsName}) => {
    const numbers = []

    for(let i = 1; i <= 40; i++){
        numbers.push(i)
    }

    

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <input type="text" placeholder='item name...' value={needsName} onChange={(e)=>setNeedsName(e.target.value)}/>
        <select onChange={(e)=>setAmount(Number(e.target.value))} value={amount}>    {/* e.target.value her zaman string gelir, bu yüzden numbera cevirdik */}
            {
                numbers.map((item) => <option key={item}>{item}</option>)
            }
        </select>
        <button>ADD</button>
    </form>
  )
}

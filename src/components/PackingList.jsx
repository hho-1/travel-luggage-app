import React from 'react'
import { PackItem } from './PackItem'

export const PackingList = ({needsList, onDelete, onRemove}) => {

  return (
    <div className='list'>
        <ul>
            {needsList.map((item) => (
                <li key={item.id}><PackItem item = {item} onDelete={onDelete}/></li>
            ))
}
        </ul>
        <div className="actions">
            <select>
              <option value="">Sort by input order</option>
              <option value="">Sort by description</option>
              <option value="">Sort by packed status</option>
            </select>
            <button onClick={onRemove}>Clear List</button>
        </div>
    </div>
    
  )
}

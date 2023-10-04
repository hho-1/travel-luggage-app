
import { useState } from 'react';
import { AddForm } from './components/AddForm';
import './index.css';
import { PackingList } from './components/PackingList';
import Footer from './components/Footer';

function App() {

  const [amount, setAmount] = useState(0)
  const [needsName, setNeedsName] = useState("")

  const [needsList, setNeedsList] = useState([])

  const createItem = (needsName, amount) => {
    const createdItems = [
        ...needsList, {
            name: needsName,
            quantity: amount,
            id: Math.floor(Math.random() * 999999999)
        }
    ];
    setNeedsList(createdItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createItem(needsName, amount)
  }

  const handleDelete = (id) => {
    const remainedItems = needsList.filter((need)=> {
      return need.id !== id;
    })
    setNeedsList(remainedItems)
  }

  return (
    <div className="app">
      <h1>✈️ FAR AWAY 🏝️</h1>
      <AddForm setAmount = {setAmount} setNeedsName = {setNeedsName} handleSubmit= {handleSubmit}/>
      <PackingList needsList = {needsList} onDelete={handleDelete}/>
      <Footer needsList = {needsList}/>
    </div>
  );
}

export default App;


import { useState } from 'react';
import { AddForm } from './components/AddForm';
import './index.css';
import { PackingList } from './components/PackingList';
import Footer from './components/Footer';

function App() {

  const [amount, setAmount] = useState(0)
  const [needsName, setNeedsName] = useState("")

  const [needsList, setNeedsList] = useState([])
  const [checkedList, setCheckedList] = useState([])
  const [numberOfChecked, setNumberOfChecked] = useState(0)

  const [percent, setPercent] = useState(0)

  //const [isChecked, setIsChecked] = useState(false)


  const createItem = (needsName, amount) => {
    const createdItems = [
        ...needsList, {
            name: needsName,
            quantity: amount,
            id: Math.floor(Math.random() * 999999999),
            
        }
    ];
    setNeedsList(createdItems)
    
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()

    createItem(needsName, amount)
    setPercent((percent, checkedList, needsList) => percent = Math.floor(checkedList?.length / (needsList?.length) * 100))
  }

  const handleDelete = (id) => {
    const remainedItems = needsList.filter((need)=> {
      return need.id !== id;
    })
    setNeedsList(remainedItems) 
  }

  function handleRemoveAll () {
    setNeedsList([])
  }


  return (
    <div className="app">
      <h1>✈️ FAR AWAY 🏝️</h1>
      <AddForm setAmount = {setAmount} setNeedsName = {setNeedsName} handleSubmit= {handleSubmit}/>
      <PackingList needsList = {needsList} onDelete={handleDelete} onRemove={handleRemoveAll} numberOfChecked={numberOfChecked} setNumberOfChecked={setNumberOfChecked} setPercent={setPercent} percent={percent} setCheckedList={setCheckedList} checkedList={checkedList}/>
      <Footer needsList = {needsList} checkedList={checkedList} percent = {percent}/>
    </div>
  );
}

export default App;

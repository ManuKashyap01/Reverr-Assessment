import Counter from './Counter'
import { useState,useEffect } from 'react'
import './App.css'

function Counters({counterArray,setCounterArray}){
  function deleteCounter(id){
    const newarr=counterArray.filter(counter=>counter.id!=id)
    setCounterArray([newarr])
  }
  console.log('here',counterArray)
    return (
      <div className='flex gap-4 flex-wrap'>
        {counterArray.map((key)=>{
          return <Counter id={key.id} deleteCounter={deleteCounter}/>
        })}
      </div>
      // <div>Hello</div>
    )
}

function App() {
  const [counterArray, setCounterArray] = useState([])

  const addCounter=()=>{
    const id=Math.max(...counterArray.map(counter=>counter.id),0)+1
    const newCounter={id}
    setCounterArray([...counterArray,newCounter])
  }
  // console.log(counterId,counterArray)
  return (
    <div className='max-w-[750px] mx-auto my-4'>
      <button className='bg-black text-white rounded-sm px-8 py-4 mb-4' onClick={addCounter}>Add Counter</button>
      <Counters counterArray={counterArray} setCounterArray={setCounterArray}/>
    </div>
  )
}

export default App

import Counter from './Counter'
import { useState} from 'react'
import './App.css'


function App() {
  const [counterArray, setCounterArray] = useState([])

  const addCounter=()=>{
    const id=Math.max(...counterArray.map(counter=>counter.id),0)+1
    const newCounter={id}
    setCounterArray([...counterArray,newCounter])
  }
  // console.log(counterId,counterArray)
  const deleteCounter=(id)=>{
    const newarr=counterArray.filter(counter=>counter.id!=id)
    setCounterArray(newarr)
  }
  return (
    <div className='lg:max-w-[800px] max-w-[400px] mx-auto my-4'>
      <button className='bg-black text-white rounded-sm px-8 py-4 mb-4' onClick={addCounter}>Add Counter</button>
      <div className='flex gap-4 flex-wrap'>
        {counterArray.map((key)=>{
          return <Counter key={key.id} id={key.id} deleteCounter={deleteCounter}/>
        })}
      </div>
    </div>
  )
}

export default App

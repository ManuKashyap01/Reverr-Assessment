import {useState} from 'react'

const Counter = ({id,deleteCounter}) => {
    // counter, name, input value
    const [counterName, setCounterName] = useState('Counter')
    const [count, setCount] = useState(0)
    const [inputValueCount, setInputValueCount] = useState(null)
    const [inputValueName, setInputValueName] = useState(null)
    
    const changeInputCount=(e)=>setInputValueCount(e.target.value)
    const changeInputName=(e)=>setInputValueName(e.target.value)

    const resetCounter=()=>setCount(0)
    const incrementCount=()=>setCount(count+1)
    const decrementCount=()=>setCount(count-1)

    const changeCounterName=()=>setCounterName(inputValueName)
    const changeDefaultStart=()=>setCount(Number(inputValueCount))
  return (
    <div key={id} className='flex max-w-[400px] bg-blue-950/80 rounded-sm p-2 gap-2 relative flex-col'>
        <h1 className="text-2xl text-white self-center">{counterName}</h1>
        <button onClick={()=>deleteCounter(id)} className='absolute text-white top-2 right-2 font-bold'>X</button>
        <div className="w-full bg-white text-black px-2 mx-auto border-2 border-black/80 rounded-sm text-right">
            {count}
        </div>
        <div className="flex w-full justify-evenly">
            <button onClick={decrementCount} className="rounded-sm w-10 h-10 flex justify-center items-center bg-black text-white text-sm">-</button>
            <button onClick={incrementCount} className="rounded-sm w-10 h-10 flex justify-center items-center bg-black text-white text-sm">+</button>
        </div>
        <div className="flex w-full gap-2 p-2">
            <input type="text" value={inputValueCount} onChange={changeInputCount} placeholder='Enter default start value' className='flex-1 px-2 py-1 rounded-sm bg-white text-black'/>
            <button onClick={changeDefaultStart} className='px-2 bg-black text-white rounded-sm py-1'>Set</button>
        </div>
        <div className="p-2">
            <button onClick={resetCounter} className="w-full text-center py-2 rounded-sm bg-black text-white">Reset</button>
        </div>
        <div className="flex w-full gap-2 p-2">
            <input type="text" value={inputValueName} onChange={changeInputName} placeholder='Change Counter Name' className='flex-1 px-2 py-1 rounded-sm bg-white text-black'/>
            <button onClick={changeCounterName} className='px-2 bg-black rounded-sm text-white py-1'>Set</button>
        </div>
    </div>
  )
}

export default Counter
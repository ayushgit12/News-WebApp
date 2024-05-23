import React from 'react'
import { useState } from 'react'
import '../App.css'


function card(data) {

  const [a, setA] = useState(1)

  const popup = () => {
    setA((a==4)?1:4);
    
  }

  
  
  
  return (
    <div className={`bg-cyan-200 w-96 justify-center shadow-md rounded-md shadow-cyan-500 ${a!=4?'hover:scale-105':''} transition-all cursor-pointer ${a===4?'w-full trans absolute z-20':''}`} onClick={popup}>
      <div className="title bg-slate-700 text-white rounded-md p-3 h-24 flex items-center justify-center">{data.data.title}</div>
      <p className='text-right p-3'> {(data.data.author=='unknown')?'- Anonymous':'- '+data.data.author}</p>
      {<img className='m-auto h-52' src={(data.data.urlToImage)?data.data.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3609aQ4Pn_5zYLUTBFrPQHntOdzbSMHpoXNn0Bm3Wg&s"} alt="" />}
      <div className="description h-36 pt-2 overflow-scroll">{data.data.description}</div>
      
      <button onClick={()=>{
        window.open(data.data.url)
      }} className='bg-slate-900 mb-3 text-white p-2 rounded-md shadow-sm hover:bg-slate-700 mt-12'>Read More</button>
    </div>
  )
}

export default card

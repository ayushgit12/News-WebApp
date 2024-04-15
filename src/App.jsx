import './App.css'
import Card from './components/Card';
import Navbar from './components/Navbar';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { IoNewspaper } from "react-icons/io5";


function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [page2, setPage2] = useState(1)
  const [title, setTitle] = useState('NEWS TODAY !')


  const getData = (data) => {
    setData(data)
  }
  const getTitle = (data) => {
    setTitle(data)
  }


  return (
    <>

      

      <Navbar page={page.toString()} title={getTitle} fetch={getData} />
      <div className='bg-slate-900 w-full h-5'></div>
      <div className='flex text-xl bg-slate-900 text-white w-20 text-center mt-3 rounded-md pl-2 py-1 shadow-slate-500 shadow-md'>Page: {page}</div>
      <div className='flex justify-end mt-4 text-xl items-center'>Go to Page: <span className='text-xl bg-white p-1 ml-2 rounded-md'><input type="text" value={page2} onChange={(e)=>setPage2(e.target.value)} /></span><button className='bg-slate-900 shadow-slate-500 shadow-md text-white px-3 rounded-md ml-3' onClick={()=>setPage(page2)}>Go</button></div>

      <h1 className='text-4xl text-center mt-10 mb-10 bg-slate-800 text-white p-3 flex items-center justify-center shadow-slate-500 shadow-md'><IoNewspaper className='pr-2' /> {title==="EVERYTHING !"?"NEWS TODAY !":title}</h1>
      <div className="cards flex gap-6 flex-wrap">
      
        {
          
          data?data.map((item) => {

            if (!(item.title === '[Removed]') || !item.title)
              return <Card data={item} key={uuidv4()} />
        }):<div className='bg-slate-900 text-white text-3xl text-center w-full h-56 flex items-center justify-center rounded-md'>NO RESULTS FOUND</div>
      }

      </div>
      <div className='flex justify-between mt-5'>
        <button
          className={`bg-slate-900 text-white pt-2 pb-2 pl-5 pr-5 rounded-md ${page === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt; Prev
        </button>
        <button className='bg-slate-900 text-white pt-2 pb-2 pl-5 pr-5 rounded-md' onClick={() => setPage(page + 1)
        } >Next &gt; </button>
      </div>
    </>
  )
}

export default App

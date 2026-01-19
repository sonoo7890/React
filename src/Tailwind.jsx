import React from 'react'
import './Tailwind.css'
const Tailwind = () => {
  let sonu=()=>{
    alert("Download successful")
  }
  let fruits=["Apple","Banana","Mango","Grapes"]
  
  return (

   <>

   <header className='w-full border h-20 flex justify-between items-center'>

    <h1>LOGO</h1>
    <nav>
      {/* <ul className='flex gap-4'> */}
      <ul className='hidden sm:block md:flex gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contect</li>
        <li>Services</li>
      </ul>
    </nav>
    <button className='border p-2 rounded  hover:bg-amber-600'onClick={sonu}>Download</button>
   </header>

   <h1>sm=640px-768 Tablet mobil friendly phle use
       md=768px-1024 laptop
       lg=1024px-1300
   </h1>
{/* ul li ke format me */}
{
  fruits.map((e,i)=>(
    <ul key={i}>
      <li>{e}</li>
    </ul>
  ))
}

   </>
    // {/* <div>
        // {/* <div className='w-26 flex justify-center text-blue-600 bg-amber-300 items-center border border-amber-200 rounded'>
      // <h1 className='bg-red-700 text-white'>Tailwind css</h1>
      // <p> This is paragraph</p>
      // </div>
    // </div> */}
    
  ) 
  
}

export default Tailwind
//  akcard tailwind use karke
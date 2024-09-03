import react from 'react'

function NavBar(props:any){
  return (
    <div>
    <h1 className='text-3xl bg-yellow-500 p-5 text-white shadow-xl cursor-pointer'>{props.text}</h1>
    </div>
    
   
  )
}
export default NavBar;
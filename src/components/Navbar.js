import Button from "./Button"; 
import logo from "/.logo";
function Navbar() {
  return (
      < div className='navbar bg-violet-600'>
          <div className='container flex items-center mx-auto py-12'>
              <div className='w-3/12'>
              <logo/> 
              
              </div>
              <div className='w-6/12'>
                 <lu ul className='nav nav-item flex justify-center space-x-10 py-16'>
                     <li>
                <li className='nav-item text-center text-white text-opacity-60 text-lg font-semibold'>profile</li>
                     </li>
                     <a className='text-white text-lg text-opacity-60 font-semibold'>skills</a>
        
                  </lu>
                 
             

              </div>
              <div className='w-3/12'>
                  <div className='button text-center'>
                      < a className='text-yellow-300 text-lg border rounded-full border-yellow 300 font-semibold py-2 px-6'>kontak</a>
                  </div>
              </div>
          </div>
      </div>
      
  )
}

export default Navbar;

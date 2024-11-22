import React from 'react';
import "../app/globals.css";
import Link from "next/link"

const Cta = () => {
  return (
    <div className='bg-blue-600 h-10'>
       <marquee className="scrollX-0.2">
        <p className='text-white py-2'> 
            Premium subscription at 30% discount. Potential partners can use the <Link className="hover:underline:orange" href="/trail">
            trial
            </Link>
        </p>

        </marquee> 

    </div>
  )
}

export default Cta
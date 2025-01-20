"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'

const data = await fetch("http://localhost:1337/api/articles?populate=*")

const response = await data.json()

const page = () => {

    useEffect(() => {
        console.log(response)
    } , []) 

  return (
    <div>
      <h1 className='text-3xl p-3 text-center' >Blog</h1> 
      
    <div className='flex justify-center gap-8' >
      {
        response.data.map((a,b) => {
            return (

                 <div key={b} className='gap-8 flex-col w-[250px] py-6 px-4 text-xl bg-gray-700 text-white my-3 min-h-[100px] rounded-xl flex justify-center items-center'>
                    
                    <h1>
                        <Link href= {`/blogpost/${a.slug}`}>
                           Title : {a.title}
                        </Link>
                    </h1>
                    <p>
                        {a.description}
                    </p>
                    <p>
                        { new Date(a.createdAt).toLocaleString().replace("," , " |")}
                    </p>
                 </div>
                
            )
            
        })
        
      }
    </div>
    
    </div>
  )
}

export default page

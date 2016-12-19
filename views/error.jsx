import React from 'react'
 export default function Component ( { message, error}) {
   return (
     <div>
        <h1>{message}</h1>
        <p>{error.status}</p>
        <p>{error.code}</p>
     </div> 
   )
 }
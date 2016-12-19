import React from 'react'

export default function Layout({ children }) {
  return (
    <html>
        <head>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        </head>
        <body className='container' >
          <main>
              { children }
          </main> 
        </body>
    </html>
  )
}
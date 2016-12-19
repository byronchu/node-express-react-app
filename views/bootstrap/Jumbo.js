import React from 'react'

export default function Jumbo({ heading, text }){
  return (
    <div className="jumbotron">
      <h1>{ heading }</h1>
      <p>{ text }</p>
    </div>
  )
}
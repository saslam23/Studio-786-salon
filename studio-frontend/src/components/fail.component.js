import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Message() {
    return (
        <div >
      <Jumbotron style={{backgroundColor:'rgb(78, 78, 78)', height:'50vh'} }>
  <h1>Uh Oh!</h1>
  <p style={{color:'white', textAlign:'center'}}>
    Looks like somethign went wrong...
  </p>
  <p>
  <a href="/"><button className="">Back to Home</button></a>
  </p>
</Jumbotron>
    </div>
    )
}
import React from 'react';

import Book from '../components/Book'

import BooksData from "./BooksData"
import { useState } from 'react'


export default function Info() {
  const [count, setCount] = useState(0)
  const livro = BooksData.data.books
  
  let i = livro[count].img
  let n = livro[count].title
  let p = livro[count].price
  function add() {
    if(count===15){
      
      setCount((prevCount) => prevCount - 16)
    }
    setCount((prevCount) => prevCount + 1)
    
}
function subtract() {
  if(count===0){
    setCount((prevCount) => prevCount + 16)
  }
  setCount((prevCount) => prevCount - 1)
  
}
    return (
      <article>
        <h1>Selling my Books</h1>
        
        {/* <p>{book}</p> */}



        <p>Hello, I am selling some of my books that I like.</p>
        <section>
        <button className="plus" onClick={subtract}>&lt;&lt;</button>
          <Book count={p} title={n} img={i}/>
        <button className="plus" onClick={add}> &gt;&gt; </button>
         
        </section>


      </article>
    )
  }



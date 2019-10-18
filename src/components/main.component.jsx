import React from "react";
import '../styles/Main.css';

export default function Main({ title, description }) {
  return (
    <>
    <article className='body-head'>
      <div className='main-container'>
        <header className='article-title'>
          <h3>{title}</h3>
        </header>
        <section>
          <p>{description}</p>
        </section>
      </div>
    </article>
    <footer className='body-head-footer'>
      <div className='block'></div>
      <div className='blocktwo'></div>
      <div className='blockthree'></div>
    </footer>
    </>
  )
}
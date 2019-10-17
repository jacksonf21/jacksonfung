import React from "react";
import Button from "./button.component";
import '../styles/Side.css';

export default function Side({ content, onClick, addSelect, subtractSelect }) {
  return (
    <article className='body-side'>
      <div className='side-container'>
        <h3>This is me</h3>
        {content}
        <footer className='side-footer'>
          This is a footer
          <Button
            onClick={onClick}
            text={'Skills'}
          />
        </footer>
      </div>
    </article>
  )
}
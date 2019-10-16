import React from "react";
import '../styles/Button.css';

export default function Button({ onClick, text }) {
  return (
    <button onClick={() => onClick()}>
      {text}
    </button>
  )
}
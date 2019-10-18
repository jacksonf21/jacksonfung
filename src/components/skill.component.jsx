import React from "react";
import '../styles/Skill.css';

export default function Skill({ name }) {
  return (  
    <div className={name}>
      <img id={name} src={require(`../../public/icons/${name}.png`)} alt='' />
    </div>
  )
}
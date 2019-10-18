import React from "react";
import '../styles/Skill.css';

export default function Skill({ name }) {
  return (  
    <div className={name}>
      <img src={require(`../../public/icons/${name}.png`)} alt='' width='125px' height='150px'/>
      {name}
    </div>
  )
}
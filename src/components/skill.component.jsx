import React from "react";
// import '../styles/Main.css';

export default function Skill({ name }) {
  return (  
    <div className={name}>
      <img src={require(`../../public/icons/${name}.png`)} alt='' width='300px' height='300px'/>
      {name}
    </div>
  )
}
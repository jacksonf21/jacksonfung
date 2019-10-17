import React from "react";
import { LANGUAGES } from "../content/content";
import Skill from "./skill.component";

export default function SkillList() {
  
  const skills = LANGUAGES.map(language => {
    return (
      <Skill 
        key={language}
        name={language}
      />
    );
  });
  
  return (
    <div className='skill-container'>
      {skills}
    </div>
  )
}
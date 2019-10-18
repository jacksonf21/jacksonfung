import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import '../styles/Side.css';
import SkillList from "./skill-list.component";

export default function Side({ content, addSelect, subtractSelect, sideName }) {
  return (
    <article className='body-side'>
      <div className='side-container'>
        {content === 1 && (
          <SkillList />
        )}
        <footer className='side-footer'>
          <ArrowBackIosIcon
            onClick={() => subtractSelect()}
          />
            {sideName}
          <ArrowForwardIosIcon
            onClick={() => addSelect()}
          />
        </footer>
      </div>
    </article>
  )
}
import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Header.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

export default function Header() {
  return (
    <nav className='nav-header'>
      <div className='icon-container'>
        <GitHubIcon/>
        <MailOutlineIcon/>
        <DescriptionOutlinedIcon/>
      </div>
    </nav>
  )
}
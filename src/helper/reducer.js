import { SKILLS, DESC_SKILLS, TITLE_DEFAULT, DESC_DEFAULT, PROJECTS, DESC_PROJECTS, ABOUT_ME, DESC_ABOUT_ME } from "../content/content";

export const SET_DEFAULT = 'SET_DEFAULT';
export const SET_SKILLS = 'SET_SKILLS';
export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_ABOUT_ME = 'SET_ABOUT_ME';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_DEFAULT:
      return {
        ...state, title: TITLE_DEFAULT, description: DESC_DEFAULT, sideName: ''
      }

    case SET_SKILLS: 
      return {
        ...state, content: SKILLS, description: DESC_SKILLS, sideName: 'SKILLS'
      };

    case SET_PROJECTS:
      return {
        ...state, content: PROJECTS, description: DESC_PROJECTS, sideName: 'PROJECTS'
      };

    case SET_ABOUT_ME:
      return {
        ...state, content: ABOUT_ME, description: DESC_ABOUT_ME, sideName: 'ABOUT ME'
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


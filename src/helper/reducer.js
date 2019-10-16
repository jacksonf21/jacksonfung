import { SKILLS, DESCRIPTION, TITLE_DEFAULT, DESC_DEFAULT } from "../content/content";

export const SET_DEFAULT = 'SET_DEFAULT';
export const SET_SKILLS = 'SET_SKILLS';
export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_ABOUT_ME = 'SET_ABOUT_ME';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_DEFAULT:
      return {
        ...state, title: TITLE_DEFAULT, description: DESC_DEFAULT
      }

    case SET_SKILLS: 
      return {
        ...state, content: SKILLS, description: DESCRIPTION
      };

    case SET_PROJECTS:
      return {

      };

    case SET_ABOUT_ME:
      return {

      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


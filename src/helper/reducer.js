import { SKILLS, DESCRIPTION } from "../content/content";

export const SET_SKILLS = 'SET_SKILLS';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';

export function reducer(state, action) {
  switch (action.type) {
    case SET_SKILLS: 
      return {
        ...state, content: SKILLS
      };
    
    case SET_DESCRIPTION:
      return {
        ...state, content: DESCRIPTION
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


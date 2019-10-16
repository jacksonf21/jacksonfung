import { SKILLS, DESCRIPTION } from "../content/content";

export const SET_SKILLS = 'SET_SKILLS';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_SKILLS: 
      return {
        ...state, content: SKILLS, description: DESCRIPTION
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


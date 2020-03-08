import { v4 as uuidv4 } from 'uuid';

export const usersReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return [
        ...state, {
        id: uuidv4(),
        name: action.user.name,
        age: action.user.age
      }]

    default:
      return state;
  }
}
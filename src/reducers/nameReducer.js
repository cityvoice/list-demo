const initialState = []

const nameReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'ADD': {
      console.log(action)
      return [ ...state, action.payload]
      break
    };
    case 'REMOVE': {
      return [...state.filter(name=>name!=action.payload)]
      break
    };
    default: 
      return state;
  }
};
export default nameReducer;
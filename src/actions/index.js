export const add = (name) => {
  return {
    type: 'ADD',
    payload : name
  };
};

export const remove = (name) => {
  return {
    type: 'REMOVE',
    payload : name
  };
};

export const select = () => {
  return {
    type: 'SELECT',
  };
};
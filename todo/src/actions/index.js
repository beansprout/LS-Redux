//this file = action creator

// each function created in here is called an action

//action
//specify a type so in reducer we can test for type
//takes object from type ADD_TODO
//payload of
export const addItem = (input) => {
  // console.log('>>>', taskInput);
  return {
    type: 'ADD_TODO',
    payload: addItem,
  };
};




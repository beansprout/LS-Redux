
// updates state in Redux object if type is the type specified in action (i.e. test for if it cares)

export default (stateProp = null,action) => { //addedItem
  switch (action.type) {
   case 'ADD_TODO':
   //if type is ADD_TODO then...
    return action.payload;
    // then return the taskInput
  default: stateProp;
  };

};
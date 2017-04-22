//Action Creator Extraordinaire

//events?

export const todoList = (task) => {
  console.log('looky:', task);
  return {
    type: 'TODOS',
    payload: task,
  };
};
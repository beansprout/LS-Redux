//reducer - should just make a calculation nothing else
//pure function

export default () => {
  return [
    {
      taskName: 'fold laundry',
      taskState: 'incomplete',
    },
    {
      taskName: 'take nap',
      taskState: 'complete',
    },
    {
      taskName: 'make more coffee',
      taskState: 'incomplete',
    },
    {
      taskName: 'make sure children return from school',
      taskState: 'completed',
    },
  ];
};
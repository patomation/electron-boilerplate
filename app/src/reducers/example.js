export default (state = 'initial value', action) =>
  action.type === 'EXAMPLE' ? action.value : state;

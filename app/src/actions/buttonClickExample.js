
export function buttonClickExample(){
  return ( dispatch, getState ) => {
    dispatch({
      type: 'EXAMPLE',
      value: 'New Value of what ever'});
  }
}

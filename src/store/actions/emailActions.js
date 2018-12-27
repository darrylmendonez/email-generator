export const createEmail = (email) => {
  return (dispatch, getState) => {
    // make asyc call to database
    dispatch({ type: 'CREATE_EMAIL', email });
  }
};
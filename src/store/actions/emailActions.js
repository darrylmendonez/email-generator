export const createEmail = (email) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asyc call to database
    dispatch({ type: 'CREATE_EMAIL', email });
  }
};
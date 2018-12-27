export const createEmail = (email) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asyc call to database
    const firestore = getFirestore();
    firestore.collection('emails').add({
      ...email,
      authorFirstName: 'John',
      authorLastName: 'Smith',
      authorID: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_EMAIL', email });
    }).catch((err) => {
      dispatch({ type: 'CREATE_EMAIL_ERROR', err });
    })
    
  }
};
export const createEmail = (email) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asyc call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('emails').add({
      ...email,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_EMAIL', email });
    }).catch((err) => {
      dispatch({ type: 'CREATE_EMAIL_ERROR', err });
    })
  }
};
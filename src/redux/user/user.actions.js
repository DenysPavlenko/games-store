import UserActionTypes from './user.types';
// Firebase
import { auth, googleAuthProvider, createUserProfileDocument, getCurrentUser } from 'services/firebase/firebase.utils';

// Sign In
export const signInStart = () => ({
  type: UserActionTypes.SIGN_IN_START
});
export const signInSuccess = userAndPassword => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: userAndPassword
});
export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signInWithGoogle = () => async (dispatch) => {
  try {
    dispatch(signInStart());
    const { user } = await auth.signInWithPopup(googleAuthProvider);
    const userRef = await createUserProfileDocument(user);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  }
  catch (error) {
    dispatch(signInFailure(error.message));
  }
}

export const signInWithEmail = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(signInStart());
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    const userRef = await createUserProfileDocument(user);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  }
  catch (error) {
    dispatch(signInFailure(error.message));
  }
}

// Check user session
export const checkUserSession = () => async (dispatch) => {
  try {
    const userAuth = await getCurrentUser();
    if (!userAuth) { return; }
    dispatch(signInStart());
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
}


// Sign Up
export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START
});
export const signUpSuccess = user => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user
});
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
export const signUpWithEmail = ({ name, email, password }) => async (dispatch) => {
  try {
    dispatch(signUpStart());
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    const userRef = await createUserProfileDocument(user, { displayName: name });
    userRef.onSnapshot(snapShot => {
      dispatch(signUpSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  }
  catch (error) {
    dispatch(signUpFailure(error.message));
  }
}


// Sign out
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const userSignOut = () => async (dispatch) => {
  try {
    dispatch(signOutStart());
    await auth.signOut();
    dispatch(signOutSuccess());
  }
  catch (error) {
    dispatch(signOutFailure(error.message));
  }
}

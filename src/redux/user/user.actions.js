import UserActionTypes from './user.types';
// Firebase
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from 'services/firebase/firebase.utils';

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
    const { user } = await auth.signInWithPopup(googleProvider);
    const userRef = await createUserProfileDocument(user);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  }
  catch (error) {
    dispatch(signInFailure(error));
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
    dispatch(signInFailure(error));
  }
}

export const checkUserSession = () => async (dispatch) => {
  try {
    const userAuth = await getCurrentUser();
    if (!userAuth) { return; }
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot => {
      dispatch(signInSuccess({
        id: snapShot.id,
        ...snapShot.data()
      }));
    });
  } catch (error) {
    dispatch(signInFailure(error));
  }
}


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
    dispatch(signOutFailure(error));
  }
}

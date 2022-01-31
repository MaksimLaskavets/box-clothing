import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAyzBONE8R-5EuWiKGIvHpS0vyplqAzoOg',
  authDomain: 'box-clothing.firebaseapp.com',
  projectId: 'box-clothing',
  storageBucket: 'box-clothing.appspot.com',
  messagingSenderId: '312821037624',
  appId: '1:312821037624:web:493f6eb4b3ab494b1604cd',
  measurementId: 'G-MY68H7FR4S',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return {};
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        createdAt,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

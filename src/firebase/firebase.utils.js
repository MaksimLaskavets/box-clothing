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
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

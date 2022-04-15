import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAnTGk31aefg9N4aXl70hI44lTcAA_f0Mk",
      
    authDomain: "airbnb-clone-15b93.firebaseapp.com",
      
    projectId: "airbnb-clone-15b93",
      
    storageBucket: "airbnb-clone-15b93.appspot.com",
      
    messagingSenderId: "1011177133505",
      
    appId: "1:1011177133505:web:977e28b5070f95993e0b40",
      
    measurementId: "G-14KJYQDCRM"
      
};
      


const app = initializeApp(firebaseConfig); //connects code to firebase
export const firestore = getFirestore(app) //fetches firestore data and stores in firestore variable
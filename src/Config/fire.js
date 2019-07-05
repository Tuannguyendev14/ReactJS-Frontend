import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAeYtP4_F8UT9j7ocDMdQoDUylpL-CJNMY",
    authDomain: "danavolunteering.firebaseapp.com",
    databaseURL: "https://danavolunteering.firebaseio.com",
    projectId: "danavolunteering",
    storageBucket: "",
    messagingSenderId: "58167590161",
    appId: "1:58167590161:web:d94fc0a9670449c6"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;


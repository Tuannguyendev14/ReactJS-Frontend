import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDZIGMCD6LktiI6dfRsTips5CJHVlzIYmI",
    authDomain: "dana-volunteering.firebaseapp.com",
    databaseURL: "https://dana-volunteering.firebaseio.com",
    projectId: "dana-volunteering",
    storageBucket: "dana-volunteering.appspot.com",
    messagingSenderId: "1073275909186",
    appId: "1:1073275909186:web:fb4dd7d387eea686"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();

export {
    storage, firebase as default
};


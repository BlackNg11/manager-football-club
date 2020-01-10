import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
   apiKey: "AIzaSyB66AxG7f8dtlVergc7mmj5hxYiNmJ1fTI",
   authDomain: "football-manager-f670d.firebaseapp.com",
   databaseURL: "https://football-manager-f670d.firebaseio.com",
   projectId: "football-manager-f670d",
   storageBucket: "football-manager-f670d.appspot.com",
   messagingSenderId: "321386654070",
   appId: "1:321386654070:web:5cbf55c912b13f60ccb257",
   measurementId: "G-SXJPWT777E"
 };

firebase.initializeApp(config);
//firebase.analytics();

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromations = firebaseDB.ref('promotions');


// firebaseDB.ref('matches').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// });

export {
  firebase,
  firebaseMatches,
  firebasePromations
}

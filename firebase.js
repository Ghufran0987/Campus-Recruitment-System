import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDJswc6UwnRKOnd6d7vibRZLv7GyvjsrNk",
    authDomain: "bloodbank-7d165.firebaseapp.com",
    projectId: "bloodbank-7d165",
    storageBucket: "bloodbank-7d165.appspot.com",
    messagingSenderId: "891557569812",
    appId: "1:891557569812:web:40427ca680ec270f038e01"
  };
let app;
if(firebase.apps.length==0){
    app =firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}


const db = app.firestore();
const auth= firebase.auth();
export {db,auth};
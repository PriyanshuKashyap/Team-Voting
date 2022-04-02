import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    // Your web app's Firebase configuration
    apiKey: "AIzaSyCOTs9gQsr7vZZtZNn0RLqvupW4NedqzVo",
    authDomain: "project-66-b4598.firebaseapp.com",
    databaseURL: "https://project-66-b4598-default-rtdb.firebaseio.com",
    projectId: "project-66-b4598",
    storageBucket: "project-66-b4598.appspot.com",
    messagingSenderId: "87218622280",
    appId: "1:87218622280:web:e3811788c4403821a06d7d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
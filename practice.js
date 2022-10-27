// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCIR_n9SbISdywGi4rKn4L-t0bk9KWb51M",
    authDomain: "leafi-a1b9f.firebaseapp.com",
    databaseURL: "https://leafi-a1b9f-default-rtdb.firebaseio.com",
    projectId: "leafi-a1b9f",
    storageBucket: "leafi-a1b9f.appspot.com",
    messagingSenderId: "1041470458268",
    appId: "1:1041470458268:web:b055e87e852e071ad72059"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
})
}
//ADD YOUR FIREBASE LINKS
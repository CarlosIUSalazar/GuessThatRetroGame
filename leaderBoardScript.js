//Insert .env here
var firebaseConfig = {
    apiKey: "AIzaSyDIkbRWGDcqaF0UA5KM0P1LFjZsnR5mX_c",
    authDomain: "guessthatgame-9454c.firebaseapp.com",
    databaseURL: "https://guessthatgame-9454c.firebaseio.com",
    projectId: "guessthatgame-9454c",
    storageBucket: "guessthatgame-9454c.appspot.com",
    messagingSenderId: "1035180389643",
    appId: "1:1035180389643:web:21d8c95e71d410cfcc1e0e"
  };

firebase.initializeApp(firebaseConfig);
dbLeaderboards = firebase.firestore();

let tabla = document.getElementById('tabla');
dbLeaderboards.collection("leaderboard").orderBy('Score','desc').onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
        <tr>
        <td>${doc.data().Username}</td>
        <td>${doc.data().Score}</td>
        <td>${doc.data().DateAdded}</td>
        </tr>
        `
    });
});
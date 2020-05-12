//Insert .env here

firebase.initializeApp(firebaseConfig);
dbLeaderboards = firebase.firestore();

let tabla = document.getElementById('tabla');
dbLeaderboards.collection("leaderboard").onSnapshot((querySnapshot) => {
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
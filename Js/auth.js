var firebaseConfig = {
    apiKey: "AIzaSyDZ9pYHurpHjpI33InoBi2ZJT_Fdu2Z10w",
    authDomain: "hackerqmobile-newdatabase.firebaseapp.com",
    databaseURL: "https://hackerqmobile-newdatabase.firebaseio.com/",
    projectId: "hackerqmobile-newdatabase",
    storageBucket: "hackerqmobile-newdatabase.appspot.com",
    messagingSenderId: "462903816679",
    appId: "1:462903816679:web:aac71517826ca6f094cd42",
    measurementId: "G-1SVWFLQ5HH"
};
firebase.initializeApp(firebaseConfig);


googleSignIn = () => {
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function (result) {
        console.log(result);
        console.log("Success, Google Account Linked");
        var user = result.user;
        var email = user.email;
        var formattedEmail = email.replace(/email/g, ".", "-");
        console.log(formattedEmail);

        localStorage.setItem("email", email);


    }).catch(function (err) {
        console.log(err)
        console.log("Google Sign In Failed")
    })


}



const txtEmail = document.getElementById("emailInput");
const txtPassword = document.getElementById("passInput");
const btnSignIn = document.getElementById("btnSignIn");

//Add login event

function name(email) {
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // ...
      });
}

btnSignIn.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise

        .catch(e => console.log(e.message), document.getElementById("alert").style.display = "none");

});



firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in')
    }
})


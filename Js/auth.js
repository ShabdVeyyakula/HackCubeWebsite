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
        var name3 = user.displayName;
        var formattedEmail1 = email.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '-');
        console.log(formattedEmail1);

        localStorage.setItem("email", formattedEmail1);
        user = localStorage.getItem("email");
        console.log(user);
        window.location = "../views/layouts/dashboard.html";




    }).catch(function (err) {
        console.log(err)
        console.log("Google Sign In Failed")
    })


}







const txtEmail = document.getElementById("emailInput");
const txtPassword = document.getElementById("passInput");
const btnSignIn = document.getElementById("btnSignIn");

//Add login event







firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in')
    }
})

const btnLogout = document.getElementById("btnLogout").value;


function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        window.location = "../login.html"
    }).catch(function (error) {
        // An error happened.
        console.log("An error with signout has occured")
    });
}












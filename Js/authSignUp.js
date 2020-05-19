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

const txtEmail = document.getElementById("emailInput").value;
const txtPassword = document.getElementById("passInput").value;
const btnSignUp = document.getElementById("btnSignUp").value;
const txtRepeat = document.getElementById("passInputRepeat").value;
const txtName = document.getElementById("nameInput").value;


googleSignIn = () => {
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function (result) {
        console.log(result);
        console.log("Success, Google Account Linked");
        var user = result.user;
        var email = user.email;
        name = user.displayName;
        var formattedEmail1 = email.replaceAll(".", "-");
        var _ref = firebase.database().ref().child("UserData").child(formattedEmail1);
        console.log(email);
        console.log(name);
        _ref.child("display name").set(name);
        _ref.child("email").set(email);
        _ref.child("username").set(formattedEmail1);
        localStorage.setItem("emailOfUser", formattedEmail1);

    }).catch(function (err) {
        console.log(err);
        console.log("Google Sign In Failed");
        document.getElementById("alert").style.display = "initial";
    })


}








//Add login event

var formattedEmail2 = txtEmail.replace(".", "-");

function signUp() {
    const email = txtEmail;
    const password = txtPassword;
    if (txtPassword !== txtRepeat) {
        document.getElementById("alert2").style.display = "initial";
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ...
        });

    }
   


}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        var _ref = firebase.database().ref().child("UserData").child(formattedEmail2);
        _ref2.child("display name").set(txtName);
        _ref2.child("email").set(txtEmail);
        _ref2.child("username").set(formattedEmail2);

    } else {
        console.log("User not logged in");


    }
});
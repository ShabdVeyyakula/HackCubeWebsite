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
        var profilePic = user.photoURL;
        var formattedEmail1 = email.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '-');
        console.log(formattedEmail1);
        localStorage.setItem("photo", profilePic);
        localStorage.setItem("normalEmail", email);


        localStorage.setItem("email", formattedEmail1);
        localStorage.setItem("name", name3);
        user = localStorage.getItem("email");
        console.log(user);
        window.location = "../views/layouts/hackathonsContent.html";




    }).catch(function (err) {
        console.log(err)
        console.log("Google Sign In Failed")
        document.getElementById("alert3").style.display = "initial";
    })


}

function qrSignInGenerate() {

    firebase.auth().signInAnonymously().catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    var ref = firebase.database().ref().child("QR-Login").push();
    console.log(ref.key);

    ref.child("token").set(ref.key.toString());

    makeQR(ref.key.toString());

    // Sync object changes

    var count = 0;

    ref.on('value', function (snap) {
        if(count != 0){
            console.log("SYNCED");

            var email = snap.val()["email"];
            
            loginWithEP("krishnatechpranav@gmail.com", "password123");

        } else {
            count = count + 1;
        }
        
    });


}


function makeQR(text) {
    localStorage.setItem("qrLoginToken", text);

    var element = document.getElementById("qrcode");

    element.innerHTML = "";

    var qrcode = new QRCode("qrcode");

    var qrText = text;

    qrcode.makeCode(qrText);
}


function loginWithEP(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage.toString());
      }).then(() => {
          console.log("success");
          $('#qrLogin').modal('hide');
          //TODO: ADD REDIRECT HERE
          deleteQRCodefromDatabase();
      });
}

function deleteQRCodefromDatabase(){
    var qrLoginToken = localStorage.getItem("qrLoginToken");

    firebase.database().ref().child("QR-Login").child(qrLoginToken).remove();
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













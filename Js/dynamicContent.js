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

function getHackathonData() {
    var emailRef = localStorage.get("email")
var hackathonsRef = firebase.database().ref().child("UserData").child(emailRef).child("Hackathons");

hackathonsRef.once("value", (snap) => {
    var hackathonsList = [];

    console.log(snap.val());
    rawData = snap.val();

    if(rawData !== null){
        snap.forEach((child) => {
            hackathonsList.push([child.child("Code").val(), child.child("Date").val(), child.child("Hackathon Name").val(), child.child("Role").val()]);
            //[code,date,name]
        });
    }

    console.log(hackathonsList);

    

}).then(function(){

    

    for(let i = 0; i <= hackathonsList.length; i++){
        /*
        elem = document.createElement("tr");
        elem.innerHTML = '<th scope="col" class="leaderboardData">1</th><th scope="col" class="leaderboardData">Shabd Veyyakul1a</th><th scope="col" class="leaderboardData">20321</th><th scope="col" class="leaderboardData">Level 1</th>';
        elem.classList.add("leaderboardData")
        elem.innerHTML = '<th scope="col" class="leaderboardData">'+(i+1).toString()+'</th><th scope="col" class="leaderboardData">' + dataList[i][0] + '</th><th scope="col" class="leaderboardData">' + dataList[i][1] + '</th><th scope="col" class="leaderboardData">Level ' +dataList[i][2] + '</th>';
        original.appendChild(elem);
        */
    };
});

}

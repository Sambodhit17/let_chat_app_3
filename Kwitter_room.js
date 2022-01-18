username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = username;








// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjDCMkpE0btohU7SpkqVqoliQBQKAKXbM",
    authDomain: "class-project-2729d.firebaseapp.com",
    projectId: "class-project-2729d",
    storageBucket: "class-project-2729d.appspot.com",
    messagingSenderId: "1062564684300",
    appId: "1:1062564684300:web:a03522786787ea83c18429"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });


    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name -"+ Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' <#"+Room_names+"</div<hr>"
document.getElementById("output").innerHTML = row;
//End code
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
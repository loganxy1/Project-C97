var firebaseConfig = {
      apiKey: "AIzaSyCCKpTCbpT6ISZeH-0DGKZP0nsFeakRp34",
      authDomain: "project-c95-36e8e.firebaseapp.com",
      databaseURL: "https://project-c95-36e8e-default-rtdb.firebaseio.com",
      projectId: "project-c95-36e8e",
      storageBucket: "project-c95-36e8e.appspot.com",
      messagingSenderId: "118397132419",
      appId: "1:118397132419:web:bd0ab9c529e98d736245b6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome, "+username+"!";

function addRoom(){
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
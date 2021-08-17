//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("roomname");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: username,
                message: msg, 
                like: 0
          });
          document.getElementById("msg").innerHTML = ""; 
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

uname = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>"+uname+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag = "<h4>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" onclick='updateLike(this.id)' value="+like+">";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on the like button"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes)+1;
      console.log(updateLike);

      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
}
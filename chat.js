(function(){
    $(document).ready(init)
    var config = {
    apiKey: "AIzaSyDDO3N3_y7_fH2vIk_3J8TuTeppt4HGRCY",
    authDomain: "chat-site-97693.firebaseapp.com",
    databaseURL: "https://chat-site-97693.firebaseio.com",
    projectId: "chat-site-97693",
    storageBucket: "chat-site-97693.appspot.com",
    messagingSenderId: "848306466393"
  };

function init(){
    firebase.initializeApp(config);
    $('#post').on('click', getData);
}

function getData(){
    // Getting Values
    txtname = $('#username').val();
    txtmessage = $('#message').val();
    console.log(txtname, txtmessage);

    firebase.database().ref('Chatroom').push({
        Username:txtname,
        Message:txtmessage,
    })
    var Firebase = firebase.database().ref('Chatroom');
    var startListening = function(){
    Firebase.once('child_added', function(snapshot){
        var data = snapshot.val();
        console.log(data);

        var dataUsernameElement = document.createElement("b");
        dataUsernameElement.textContent = data.Username;

        var dataMessageElement = document.createElement("p");
        dataMessageElement.textContent = data.Message;

        var dataElement = document.createElement("div");
        dataElement.className = "data";
        dataElement.appendChild(dataUsernameElement);
        dataElement.appendChild(dataMessageElement);

        document.getElementById("chat").appendChild(dataElement);
            });
        }
            startListening();
    }
function userAuth(){
    firebaseAuth = firebase.database().auth()

    }
})();
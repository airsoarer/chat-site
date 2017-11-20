 (function(){
    $(document).ready(init);
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
     $('#create').on('click', getData);
}

function getData(){
    // Get values
    var title = $('#title').val();
    var description = $('#description').val();
    console.log(title,description);

    // Get refrence to Firebase
    var ref = firebase.database().ref('Rooms');

    }
}
})();

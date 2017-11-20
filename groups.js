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
     loadChatrooms();
}

function loadChatrooms(){
    var ref = firebase.database().ref().child('Rooms');
    ref.once('child_added', function(snapshot){
        var keys = Object.keys(snapshot.val());
        for(i in keys){
            if(keys[i]){
                //make elements
                var title = document.createElement("h2");
                var description = document.createElement("p");
                var containmentDiv = document.createElement("div");
                var aTag = document.createElement("a");
                aTag.setAttribute('href', 'chat.html?room=' + keys[i]);

                //load data
                titleText = document.createTextNode(keys[i]);
                if(snapshot.val()[keys[i]]['Description']){
                    var descriptionText = document.createTextNode(snapshot.val()[keys[i]]['Description']);
                }else{
                    var descriptionText = document.createTextNode("No Description");
                }

                //append data to elements
                title.appendChild(titleText);
                description.appendChild(descriptionText);
                containmentDiv.appendChild(title);
                containmentDiv.appendChild(description);
                title.appendChild(aTag);
            }
        }
    });
}
})();
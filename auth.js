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
    $('#login').on('click', login);
    $('#signup').on('click', signup);
}

function login(txtUser, txtPass, firebaseAuth){
    firebaseAuth = firebase.auth();
    var txtUser = $('#username').val();
    var txtPass = $('#password').val();

    firebaseAuth.signInWithEmailAndPassword(txtUser, txtPass);
    pageChange();
}

function signup(txtUser, txtPass, firebaseAuth){
     firebaseAuth.createUserWithEmailAndPassword(txtUser, txtPass);
     pageChange();
}

function pageChange(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
        }else{
            console.log("not logged in");
        }
    });
    location.replace("chat.html")
}
})();
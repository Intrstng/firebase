var firebaseConfig = {
    apiKey: "AIzaSyD5TgU8jEZzwyfh_jGtooBVc1c_IF7589g",
    authDomain: "mylogin-4d209.firebaseapp.com",
    databaseURL: "https://mylogin-4d209-default-rtdb.firebaseio.com",
    projectId: "mylogin-4d209",
    storageBucket: "mylogin-4d209.appspot.com",
    messagingSenderId: "808890365231",
    appId: "1:808890365231:web:c4df2320db8f69e54a5dda",
    measurementId: "G-P1H3YF4B75"
};
   firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

  var datab = firebase.database().ref('forms');
  function UserRegister(){
      var email = document.getElementById('eemail').value;
      var password = document.getElementById('lpassword').value;
      firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){

      }).catch(function (error) {
          var errorcode = error.code;
          var errormsg = error.message;
      });
    }
    const auth = firebase.auth();
    function SignIn(){
        var email = document.getElementById('eemail').value;
        var password = document.getElementById('lpassword').value;
        const promise = auth.signInWithEmailAndPassword(email,password);
        promise.catch( e => alert(e.msg));
            window.open("https://www.youtube.com/watch?v=lgEXfCNAexw","_self");
    }
  document.getElementById('form').addEventListener("submit", (e) => {
e.preventDefault();
var userInfo = datab.push();
userInfo.set({
    name: getId("fname"),
    email : getId("eemail"),
    password : getId('lpassword')
});
alert("Sucessfully Sent");
console.log('Sent');
document.getElementById('form').reset();
});
function getId(id){
    return document.getElementById(id).value;
}
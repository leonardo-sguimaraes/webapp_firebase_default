
 var config = {
    apiKey: "AIzaSyDB_oPRenRvm6TPex8d5SJRqy_WxTVnfcI",
    authDomain: "jhonydog-ecc1a.firebaseapp.com",
    databaseURL: "https://jhonydog-ecc1a.firebaseio.com",
    storageBucket: "jhonydog-ecc1a.appspot.com",
    messagingSenderId: "308347401583"
  };
  firebase.initializeApp(config);


  var email = document.getElementById('email');
  var password = document.getElementById('password');

function loginAccount(){
  firebase
  .auth()
  .signInWithEmailAndPassword(email.value, password.value)
  .then(function (result){
      console.log(result);
      alert("Bem vindo" +  email.value);

  })
  .catch(function(error){ 
      console.error(error.code);
      console.error(error.message);
      alert("Falha ao logar!  verifique email e senha se estão corretos!");
  });
}
function createAccount(){
    firebase.auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(function(){
      alert("Bem vindo "+ email.value);
    })
    .catch(function(error){
      console.error(error.code);
      console.error(error.message);
      alert("Falha ao cadastrar, verifique o erro no console");
    });
  }

  function logarwithGithub(){
   
    var provider  = new firebase.auth.GoogleAuthProvider();
    singIn(provider);
  }

  function singIn(provider){
   alert(provider);
    firebase.auth().singInWithPopup(provider).then(function(result){
        console.log(result);
        var token = result.credential.accessToken;
        alert("Logado com Sucesso!");
      }).catch(function(error){
        console.log(error);
        alert("Falha na autenticação");

      });
  }
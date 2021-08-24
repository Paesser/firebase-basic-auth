function login(){
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	
	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
		window.location="dashboard.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
	
}

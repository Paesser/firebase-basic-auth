function logout(){
	
	firebase.auth().signOut().then(() => {
  // Sign-out successful.
		
		window.location="login.html"
}).catch((error) => {
  // An error happened.
});

}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
	  
	  document.location="login.html"
  }
});

//registration script//


function signup(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
       document.getElementById("reg").style.display="none";
		document.getElementById("logout").style.display="none";
		
		 document.getElementById('toast').innerHTML= "registered as: <br>"+user.email;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
         document.getElementById('toast').innerHTML= errorMessage;
	
		
  });
    
}

//login script//

function login(){
	 var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
	
	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
		document.getElementById('toast').innerHTML= "login success";
		document.getElementById("form").style.display="none";
		document.getElementById("logout").style.display="block";
		document.getElementById("pTag").innerHTML="welcome "+user.email;
	
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
		
		document.getElementById('toast').innerHTML= errorMessage;
		
		console.log("error")
  });

	
}


//logout//

function logout(){
	
	firebase.auth().signOut().then(() => {
		
		document.getElementById("form").style.display="block";
		document.getElementById("reg").style.display="block";
		document.getElementById("logout").style.display="none";
		document.getElementById("pTag").innerHTML="";
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
		
		console.log("error")
});

}

function persist(){
	
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
		
		console.log("could not persist")
  });
	
}

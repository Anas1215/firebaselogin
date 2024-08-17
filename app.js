
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDDn4yQCLahp4IMTUjmSJxeL-hRBsg1bzc",
    authDomain: "first-project-6c043.firebaseapp.com",
    projectId: "first-project-6c043",
    storageBucket: "first-project-6c043.appspot.com",
    messagingSenderId: "1008736704685",
    appId: "1:1008736704685:web:a45a9d3fbaa5cbf4044e24",
    measurementId: "G-MJQ7YFXJX8"
  };

 
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //console.log("app=>",app);
  const auth = getAuth();
  //console.log("auth=>",auth);


  const signup_email = document.getElementById("sigup_email");
  const signup_password = document.getElementById("signup_password");
  const signup_btn = document.getElementById("signup_btn");

  const signin_email = document.getElementById("sigin_email");
  const signin_password = document.getElementById("signin_password");
  const signin_btn = document.getElementById("signin_btn");

  const user_email = document.getElementById("user_email");
  const logout_btn = document.getElementById("logout_btn");


  signup_btn.addEventListener("click",createUserAccount);
  signin_btn.addEventListener("click",signin);

  const auth_container = document.getElementById(auth_container);
  const user_container = document.getElementById(user_container)


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in==>");
    const uid = user.uid;
    auth_container.style.display="none";
    user_container.style.display="block";
    user_email.innerText=user.email;
  } else {
    console.log("user is not logged in==>");
    auth_container.style.display="block";
    user_container.style.display="none";
    user_email.innerText=user.email;
  }
});

function createUserAccount() {
 // console.log("email=>",signup_email.value);
  //console.log("password=>",signup_password.value);
  createUserWithEmailAndPassword(auth, signup_email, signup_password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user=>",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    //..
  });

}

function signin()
{
 console.log("email=>",signin_email.value);
  //console.log("password=>",signin_password.value);
signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    Signed in 
  
    const user = userCredential.user;
    console.log("user");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}






// Yeh file Login, Signup, Logout aur user ki state sambhalti hai

window.currentUser = null;

// Naya account banane ke liye
function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

// Pehle se bane account se login karne ke liye
function logIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

// Google Account se login/signup ke liye
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

// Logout karne ke liye
function logOut() {
  return firebase.auth().signOut();
}

// Poora-page Auth view dikhana/chupana
function showAuthView() {
  document.getElementById("landingView").style.display = "none";
  document.getElementById("authView").style.display = "flex";
  window.scrollTo(0, 0);
}

function hideAuthView() {
  document.getElementById("authView").style.display = "none";
  document.getElementById("landingView").style.display = "block";
  const authError = document.getElementById("authError");
  if (authError) authError.textContent = "";
}

// Jab bhi login/logout hota hai, yeh function apne aap chalta hai
// aur UI ko update karta hai
firebase.auth().onAuthStateChanged((user) => {
  window.currentUser = user;

  const navLoggedOut = document.getElementById("navLoggedOut");
  const navLoggedIn = document.getElementById("navLoggedIn");
  const generatorSection = document.getElementById("generator");
  const userInfo = document.getElementById("userInfo");

  if (!navLoggedOut || !navLoggedIn || !generatorSection) return;

  if (user) {
    // User logged in hai
    navLoggedOut.style.display = "none";
    navLoggedIn.style.display = "flex";
    generatorSection.style.display = "block";
    if (userInfo) userInfo.textContent = user.email;

    // Login ke turant baad wapas landing page par le aao
    hideAuthView();
  } else {
    // User logged out hai
    navLoggedOut.style.display = "flex";
    navLoggedIn.style.display = "none";
    generatorSection.style.display = "none";
  }
});

// Login/Signup form ke buttons se yeh function judte hain
function initAuthUI() {
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const googleBtn = document.getElementById("googleSignInBtn");
  const authError = document.getElementById("authError");

  if (signupBtn) {
    signupBtn.onclick = async () => {
      const email = document.getElementById("authEmail").value.trim();
      const password = document.getElementById("authPassword").value;

      if (!email || !password) {
        authError.textContent = "Email aur password dono bharein.";
        return;
      }
      if (password.length < 6) {
        authError.textContent = "Password kam se kam 6 characters ka hona chahiye.";
        return;
      }

      try {
        authError.textContent = "";
        await signUp(email, password);
      } catch (err) {
        authError.textContent = translateAuthError(err.code);
      }
    };
  }

  if (loginBtn) {
    loginBtn.onclick = async () => {
      const email = document.getElementById("authEmail").value.trim();
      const password = document.getElementById("authPassword").value;

      if (!email || !password) {
        authError.textContent = "Email aur password dono bharein.";
        return;
      }

      try {
        authError.textContent = "";
        await logIn(email, password);
      } catch (err) {
        authError.textContent = translateAuthError(err.code);
      }
    };
  }

  if (googleBtn) {
    googleBtn.onclick = async () => {
      try {
        authError.textContent = "";
        await signInWithGoogle();
      } catch (err) {
        authError.textContent = translateAuthError(err.code);
      }
    };
  }

  if (logoutBtn) {
    logoutBtn.onclick = () => {
      logOut();
    };
  }
}

// Firebase ke technical error codes ko simple Hindi mein badalta hai
function translateAuthError(code) {
  const errors = {
    "auth/email-already-in-use": "Yeh email pehle se registered hai. Login karke dekhein.",
    "auth/invalid-email": "Email sahi format mein nahi hai.",
    "auth/weak-password": "Password bahut kamzor hai, kam se kam 6 characters rakhein.",
    "auth/user-not-found": "Yeh email registered nahi hai. Pehle Sign Up karein.",
    "auth/wrong-password": "Password galat hai.",
    "auth/invalid-credential": "Email ya password galat hai.",
    "auth/popup-closed-by-user": "Google window band ho gayi. Dobara koshish karein."
  };
  return errors[code] || "Kuch gadbad hui, dobara koshish karein.";
}

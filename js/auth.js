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

// Password bhool jaane par reset email bhejta hai
function resetPassword(email) {
  return firebase.auth().sendPasswordResetEmail(email);
}

// Logout karne ke liye
function logOut() {
  return firebase.auth().signOut();
}

// Glass Popup kholna/band karna - peeche ka page blur ho jaata hai
function openAuthModal() {
  document.getElementById("authModal").style.display = "flex";
  document.getElementById("landingView").classList.add("page-blurred");
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  document.getElementById("authModal").style.display = "none";
  document.getElementById("landingView").classList.remove("page-blurred");
  document.body.style.overflow = "";
  const authError = document.getElementById("authError");
  const authSuccess = document.getElementById("authSuccess");
  if (authError) authError.textContent = "";
  if (authSuccess) authSuccess.textContent = "";
}

// Jab bhi login/logout hota hai, yeh function apne aap chalta hai
// aur UI ko update karta hai
firebase.auth().onAuthStateChanged((user) => {
  window.currentUser = user;

  const landingView = document.getElementById("landingView");
  const dashboardView = document.getElementById("dashboardView");
  const dashUserName = document.getElementById("dashUserName");
  const dashAvatar = document.getElementById("dashAvatar");

  if (!landingView || !dashboardView) return;

  if (user) {
    // User logged in hai - seedha Dashboard dikhao
    landingView.style.display = "none";
    dashboardView.style.display = "block";

    const name = user.displayName || user.email.split("@")[0];
    if (dashUserName) dashUserName.textContent = name;
    if (dashAvatar) dashAvatar.textContent = name.charAt(0).toUpperCase();

    closeAuthModal();
    if (typeof renderDashboardStats === "function") renderDashboardStats();
  } else {
    // User logged out hai - Landing page dikhao
    landingView.style.display = "block";
    dashboardView.style.display = "none";
  }
});

// Login/Signup form ke buttons se yeh function judte hain
function initAuthUI() {
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const googleBtn = document.getElementById("googleSignInBtn");
  const forgotLink = document.getElementById("forgotPasswordLink");
  const authError = document.getElementById("authError");
  const authSuccess = document.getElementById("authSuccess");

  // "Remember Me" ke hisaab se login session ka type set karta hai
  function applyPersistence() {
    const rememberMe = document.getElementById("rememberMe").checked;
    const mode = rememberMe
      ? firebase.auth.Auth.Persistence.LOCAL   // browser band karne ke baad bhi login rahe
      : firebase.auth.Auth.Persistence.SESSION; // sirf tab tak jab tak tab khula hai
    return firebase.auth().setPersistence(mode);
  }

  if (signupBtn) {
    signupBtn.onclick = async () => {
      const email = document.getElementById("authEmail").value.trim();
      const password = document.getElementById("authPassword").value;

      authError.textContent = "";
      authSuccess.textContent = "";

      if (!email || !password) {
        authError.textContent = "Email aur password dono bharein.";
        return;
      }
      if (password.length < 6) {
        authError.textContent = "Password kam se kam 6 characters ka hona chahiye.";
        return;
      }

      try {
        await applyPersistence();
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

      authError.textContent = "";
      authSuccess.textContent = "";

      if (!email || !password) {
        authError.textContent = "Email aur password dono bharein.";
        return;
      }

      try {
        await applyPersistence();
        await logIn(email, password);
      } catch (err) {
        authError.textContent = translateAuthError(err.code);
      }
    };
  }

  if (googleBtn) {
    googleBtn.onclick = async () => {
      authError.textContent = "";
      authSuccess.textContent = "";
      try {
        await applyPersistence();
        await signInWithGoogle();
      } catch (err) {
        authError.textContent = translateAuthError(err.code);
      }
    };
  }

  if (forgotLink) {
    forgotLink.onclick = async (e) => {
      e.preventDefault();
      const email = document.getElementById("authEmail").value.trim();
      authError.textContent = "";
      authSuccess.textContent = "";

      if (!email) {
        authError.textContent = "Pehle apna email likhein, phir 'Forgot Password' dabayein.";
        return;
      }

      try {
        await resetPassword(email);
        authSuccess.textContent = "Password reset karne ka link " + email + " par bhej diya gaya hai.";
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

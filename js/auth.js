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

// Logout karne ke liye
function logOut() {
  return firebase.auth().signOut();
}

// Popup (modal) kholne aur band karne ke liye
function openAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.style.display = "flex";
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.style.display = "none";
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

    // Login/Signup ke turant baad popup band kar do
    closeAuthModal();
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
    "auth/invalid-credential": "Email ya password galat hai."
  };
  return errors[code] || "Kuch gadbad hui, dobara koshish karein.";
}

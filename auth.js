// Yeh file Login, Signup, Logout aur user ki state sambhalti hai

window.currentUser = null;
window._phoneConfirmationResult = null;
window._pendingAuthUser = null;

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

function signInWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

async function sendPhoneOtp(phoneNumber) {
  // invisible reCAPTCHA verifier
  try {
    window.recaptchaVerifier = window.recaptchaVerifier || new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    });
    const verifier = window.recaptchaVerifier;
    const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, verifier);
    window._phoneConfirmationResult = confirmationResult;
    return { success: true };
  } catch (err) {
    console.error('sendPhoneOtp error', err);
    throw err;
  }
}

async function verifyPhoneOtp(code) {
  try {
    if (!window._phoneConfirmationResult) throw new Error('No confirmation result.');
    const result = await window._phoneConfirmationResult.confirm(code);
    return result.user;
  } catch (err) {
    console.error('verifyPhoneOtp error', err);
    throw err;
  }
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

function applyAuthState(user) {
  window.currentUser = user;

  const landingView = document.getElementById("landingView");
  const dashboardView = document.getElementById("dashboardView");
  const dashUserName = document.getElementById("dashUserName");
  const dashAvatar = document.getElementById("dashAvatar");

  if (!landingView || !dashboardView) {
    window._pendingAuthUser = user;
    return;
  }
  window._pendingAuthUser = null;

  if (user) {
    // User logged in hai - seedha Dashboard dikhao
    landingView.style.display = "none";
    dashboardView.style.display = "block";

    const name = user.displayName || (user.email ? user.email.split("@")[0] : "there");
    if (dashUserName) dashUserName.textContent = name;
    if (dashAvatar) dashAvatar.textContent = name.charAt(0).toUpperCase();

    closeAuthModal();
    if (typeof renderDashboardStats === "function") renderDashboardStats();
    // Post-login hook (onboarding etc.)
    if (typeof window.handlePostLogin === 'function') {
      try { window.handlePostLogin(user); } catch (e) { console.error('handlePostLogin error', e); }
    }
  } else {
    // User logged out hai - Landing page dikhao
    landingView.style.display = "block";
    dashboardView.style.display = "none";
  }
}

window.applyPendingAuthState = function () {
  if (window._pendingAuthUser !== null) applyAuthState(window._pendingAuthUser);
};

// Firebase state can arrive before app.js has rendered the UI.
firebase.auth().onAuthStateChanged(applyAuthState);

// Login/Signup form ke buttons se yeh function judte hain
function initAuthUI() {
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("sidebarLogoutBtn");
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
        authError.textContent = "Please enter both email and password.";
        return;
      }
      if (password.length < 6) {
        authError.textContent = "Password must be at least 6 characters.";
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
        authError.textContent = "Please enter both email and password.";
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
        console.error('Google sign in error', err);
        authError.textContent = err.message || translateAuthError(err.code);
      }
    };
  }

  const facebookBtn = document.getElementById('facebookSignInBtn');
  if (facebookBtn) {
    facebookBtn.onclick = async () => {
      authError.textContent = "";
      authSuccess.textContent = "";
      try {
        await applyPersistence();
        await signInWithFacebook();
      } catch (err) {
        console.error('Facebook sign in error', err);
        authError.textContent = err.message || 'Facebook sign-in failed.';
      }
    };
  }

  const phoneBtn = document.getElementById('phoneSignInBtn');
  const phoneRow = document.getElementById('phoneAuthRow');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  const phoneInput = document.getElementById('phoneInput');
  const otpInput = document.getElementById('otpInput');

  if (phoneBtn && phoneRow) {
    phoneBtn.onclick = () => {
      phoneRow.style.display = phoneRow.style.display === 'none' ? 'block' : 'none';
    };
  }

  if (sendOtpBtn && phoneInput) {
    sendOtpBtn.onclick = async () => {
      authError.textContent = '';
      const phone = phoneInput.value.trim();
      if (!phone) { authError.textContent = 'Please enter a phone number.'; return; }
      try {
        await sendPhoneOtp(phone);
        otpInput.style.display = 'block';
        verifyOtpBtn.style.display = 'inline-block';
        authSuccess.textContent = 'OTP sent. Please check your phone.';
      } catch (err) {
        authError.textContent = err.message || 'Could not send OTP.';
      }
    };
  }

  if (verifyOtpBtn && otpInput) {
    verifyOtpBtn.onclick = async () => {
      authError.textContent = '';
      const code = otpInput.value.trim();
      if (!code) { authError.textContent = 'Enter the OTP.'; return; }
      try {
        await verifyPhoneOtp(code);
      } catch (err) {
        authError.textContent = err.message || 'OTP verification failed.';
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
        authError.textContent = "Please enter your email first, then click 'Forgot Password'.";
        return;
      }

      try {
        await resetPassword(email);
        authSuccess.textContent = "A password reset link has been sent to " + email + ".";
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
    "auth/email-already-in-use": "This email is already registered. Try signing in instead.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password is too weak. Use at least 6 characters.",
    "auth/user-not-found": "No account found with this email. Please create one.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/popup-closed-by-user": "The Google sign-in window was closed. Please try again."
  };
  return errors[code] || "Something went wrong. Please try again.";
}

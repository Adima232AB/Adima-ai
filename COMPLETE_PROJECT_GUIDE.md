# 🎯 ADIMA AI STUDIO - COMPLETE PROJECT GUIDE

## 📚 TABLE OF CONTENTS
1. Project Overview
2. Architecture & Data Flow
3. Complete File Structure
4. Frontend Code Breakdown
5. Backend Code Breakdown
6. Installation & Setup
7. Deployment Guide
8. How to Extend/Modify

---

## 🚀 PROJECT OVERVIEW

### What is Adima AI Studio?
A web-based AI content generation platform that helps creators generate scripts, captions, blogs, and more using AI.

### Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Netlify Functions / Vercel Serverless
- **AI Models**: Google Gemini 2.5 Flash
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Hosting**: Netlify / Vercel
- **Live**: https://adima-ai-five.vercel.app

### Key Features
✅ User Authentication (Email, Google, Facebook, Phone OTP)
✅ AI Content Generation (Instagram, YouTube, Blog, Email, etc.)
✅ Chat History & Search
✅ Export to TXT, DOC, PDF
✅ Onboarding & Profile Management
✅ Responsive Design
✅ Dark Theme with Green Accent

---

## 🏗️ ARCHITECTURE & DATA FLOW

### User Journey

\`\`\`
1. USER LANDS ON WEBSITE
   ↓
2. SEES LANDING PAGE (Marketing)
   ├─ Features overview
   ├─ Template categories
   └─ Login/Signup buttons
   ↓
3. CLICKS "Start for Free" → Opens Auth Modal
   ├─ Email/Password
   ├─ Google Sign-in
   ├─ Facebook Sign-in
   └─ Phone OTP
   ↓
4. FIREBASE AUTHENTICATES USER
   ├─ Creates account if new
   └─ Logs in if existing
   ↓
5. USER SEES DASHBOARD
   ├─ Sidebar (Navigation)
   ├─ AI Generator (Main)
   ├─ History (Left sidebar)
   └─ Overview Stats (Right)
   ↓
6. USER TYPES PROMPT → Clicks GENERATE
   ↓
7. FRONTEND SENDS REQUEST TO BACKEND
   POST /api/chat
   {
     "message": "Write an Instagram caption about coffee"
   }
   ↓
8. BACKEND CALLS GEMINI API
   ├─ Sends message to Google Gemini
   ├─ Includes system prompt (Hindi + English support)
   └─ Waits for response
   ↓
9. GEMINI GENERATES CONTENT
   ├─ Returns creative reply
   └─ Backend sends to frontend
   ↓
10. FRONTEND DISPLAYS RESULT
    ├─ Typewriter animation
    ├─ Saves to history
    └─ Shows copy/download buttons
    ↓
11. USER CAN:
    ├─ Copy to clipboard
    ├─ Download as TXT/DOC/PDF
    ├─ View history
    ├─ Pin favorite items
    └─ Regenerate
\`\`\`

---

## 📁 COMPLETE FILE STRUCTURE

\`\`\`
Adima-ai/
│
├── 📄 index.html ................................ ENTRY POINT
│
├── 🎨 css/
│   ├── style.css ................................ Main styling (534 lines)
│   │   - CSS Variables (colors, shadows, spacing)
│   │   - Navigation bar
│   │   - Hero section layout
│   │   - Card designs with gradients
│   │   - Form inputs and buttons
│   │   - Generator card styling
│   │   - History/Chat styling
│   │   - Responsive breakpoints
│   │
│   ├── animation.css ............................. Animations & effects (163 lines)
│   │   - Background glow pulse
│   │   - Glassmorphism effects
│   │   - Dashboard layout
│   │   - Sidebar styling
│   │   - Skeleton loader animation
│   │   - Button transitions
│   │
│   └── responsive.css ............................ Mobile responsive (empty - can expand)
│
├── 💻 js/
│   ├── firebase-config.js ........................ Firebase setup (13 lines)
│   │   - Initialize Firebase
│   │   - API keys and project config
│   │
│   ├── api.js ................................... Backend API client (23 lines)
│   │   - AdimaAPI module
│   │   - sendMessage(message, signal) function
│   │   - Error handling
│   │
│   ├── auth.js .................................. Authentication logic (304 lines)
│   │   - signUp() / logIn()
│   │   - OAuth providers (Google, Facebook)
│   │   - Phone OTP auth
│   │   - Password reset
│   │   - Auth modal management
│   │   - Session persistence
│   │
│   ├── ui.js .................................... UI event handlers (124 lines)
│   │   - Generate button logic
│   │   - Typewriter animation
│   │   - Skeleton loader
│   │   - Stop generation
│   │   - Offline detection
│   │
│   ├── history.js ............................... History management (153 lines)
│   │   - Save/Load from LocalStorage
│   │   - Pin/Unpin items
│   │   - Search functionality
│   │   - Dashboard stats
│   │   - XSS protection
│   │
│   ├── download.js .............................. Export functionality (74 lines)
│   │   - Download as TXT
│   │   - Download as DOC
│   │   - Download as PDF (via Print dialog)
│   │
│   ├── onboarding.js ............................ Post-login flow (132 lines)
│   │   - Name & interests collection
│   │   - Two-step modal
│   │   - Firestore integration
│   │
│   ├── theme.js ................................. Theme switching (empty - future use)
│   │
│   ├── adima-card-script.js ..................... Interactive components (67 lines)
│   │   - Card input/button handling
│   │   - Quick actions
│   │   - File attachment support
│   │
│   └── app.js ................................... Main controller (509 lines)
│       - renderApp() - Creates entire UI
│       - Landing page HTML
│       - Auth modal HTML
│       - Dashboard HTML
│       - Template categories
│       - Event listeners setup
│       - Error handling
│
├── ⚙️ api/
│   └── chat.js .................................. Vercel Serverless (56 lines)
│       - Handles POST /api/chat
│       - Calls DeepSeek API
│       - Error handling
│       - Uses AICREDITS_API_KEY
│
├── 🌐 netlify/
│   ├── functions/
│   │   └── chat.js .............................. Netlify Function (84 lines)
│   │       - Handles POST /.netlify/functions/chat
│   │       - Calls Google Gemini API
│   │       - System prompt in Hindi/English
│   │       - Uses GEMINI_API_KEY
│   │       - Model: gemini-2.5-flash
│   │
│   └── netlify.toml ............................. Netlify config
│       - Build settings
│       - Function routing
│       - Redirects /api/chat to function
│
├── 📋 .github/agents/
│   ├── app-debugging.agent.md ................... Debug frontend issues
│   ├── code-reporter.agent.md ................... Generate documentation
│   ├── code-extractor.agent.md .................. Extract all code
│   ├── app-builder.agent.md ..................... Build from code
│   └── code-flow.agent.md ....................... Orchestrate workflow
│
└── 📊 PROJECT_CODE_INVENTORY.json ............... Complete metadata
\`\`\`

---

## 💻 FRONTEND CODE BREAKDOWN

### 1. HTML (index.html)

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags for responsiveness -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- CSS Files -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animation.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <!-- Main app container -->
  <div id="app"></div>
  
  <!-- Firebase SDK (from CDN) -->
  <script src="https://www.gstatic.com/firebasejs/12.16.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/12.16.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore-compat.js"></script>
  
  <!-- Our JavaScript modules (ORDER MATTERS!) -->
  <script src="js/firebase-config.js"></script>  <!-- 1. Firebase init
  <script src="js/api.js"></script>              <!-- 2. API module
  <script src="js/history.js"></script>          <!-- 3. History module
  <script src="js/onboarding.js"></script>       <!-- 4. Onboarding module
  <script src="js/auth.js"></script>             <!-- 5. Auth module
  <script src="js/ui.js"></script>               <!-- 6. UI module
  <script src="js/download.js"></script>         <!-- 7. Download module
  <script src="js/theme.js"></script>            <!-- 8. Theme module
  <script src="js/app.js"></script>              <!-- 9. Main app (renders everything)
</body>
</html>
\`\`\`

### 2. CSS Architecture

**style.css** - Main styling
- Root CSS variables (colors, shadows, spacing)
- Base element styling
- Navigation bar (.nav, .nav-inner, .brand)
- Hero section (.hero, .hero-grid, .headline-card)
- Feature cards (.feature, .feature-grid)
- Generator section (.generator-card, .generator-title)
- Toolbar with buttons
- Input fields and forms
- History items styling
- Chat bubbles
- Output box
- Loading spinner animation
- Footer
- Responsive breakpoints (920px, 560px)

**animation.css** - Effects & interactions
- Background glow pulse (body::before)
- Glassmorphism (.glass-card)
- Page blur effect (.page-blurred)
- Dashboard layout (.dashboard-shell, .dashboard-sidebar)
- Skeleton loader animation
- Button transitions

### 3. JavaScript Flow

**Step 1: Initialization Order**

\`\`\`
index.html loads
  ↓
firebase-config.js → Initialize Firebase
  ↓
api.js → Define AdimaAPI module
  ↓
history.js → Define history functions
  ↓
onboarding.js → Define onboarding flow
  ↓
auth.js → Setup auth listeners
  ↓
ui.js → Setup UI event listeners
  ↓
download.js → Define download functions
  ↓
theme.js → Theme functions
  ↓
app.js → renderApp() → Render entire UI
  ↓
Bootstrap complete!
\`\`\`

**Step 2: User Authentication**

\`\`\`javascript
// auth.js
firebase.auth().onAuthStateChanged(applyAuthState);
  ↓
User logs in → Firebase auth
  ↓
applyAuthState(user) called
  ↓
If user:
  - Hide landing page
  - Show dashboard
  - Update username
  - Call handlePostLogin() (onboarding)
Else:
  - Show landing page
  - Hide dashboard
\`\`\`

**Step 3: Content Generation**

\`\`\`javascript
// ui.js
User types prompt → Clicks Generate button
  ↓
runGenerate(message) called
  ↓
Check if message exists
Check if online (navigator.onLine)
  ↓
Show skeleton loader
Disable Generate, Enable Stop
  ↓
AdimaAPI.sendMessage(message, signal) called
  ↓
Fetch POST /api/chat with AbortController
  ↓
Backend processes request
  ↓
Response arrives
  ↓
typeOutText(reply) - Typewriter animation
  ↓
saveHistory(message, reply) - Save to localStorage
  ↓
renderHistory() - Update history display
\`\`\`

**Step 4: History Management**

\`\`\`javascript
// history.js
saveHistory(question, answer)
  ↓
Create entry object with:
  - id (timestamp + random)
  - question
  - answer
  - time (formatted date)
  - ts (timestamp for filtering)
  - pinned (false initially)
  ↓
Store in localStorage (HISTORY_KEY)
Keep only last 30 entries
  ↓
Update total count in localStorage
\`\`\`

---

## 🔧 BACKEND CODE BREAKDOWN

### 1. Netlify Function (netlify/functions/chat.js)

\`\`\`javascript
exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "..." }) };
  }

  try {
    // Parse request body
    const { message } = JSON.parse(event.body);

    // Validate input
    if (!message || message.trim() === "") {
      return { statusCode: 400, body: JSON.stringify({ error: "..." }) };
    }

    // Call Google Gemini API
    const response = await fetch(
      \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent\`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{
              text: "Aap Adima AI hain, helpful aur friendly AI assistant..."
            }]
          },
          contents: [{
            role: "user",
            parts: [{ text: message }]
          }]
        })
      }
    );

    // Check response status
    const data = await response.json();
    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: data.error?.message }) };
    }

    // Extract reply
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
\`\`\`

### 2. API Routing (netlify.toml)

\`\`\`toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/api/chat"
  to = "/.netlify/functions/chat"
  status = 200
\`\`\`

This means:
- When frontend calls `POST /api/chat`
- It gets routed to `/.netlify/functions/chat`
- Which runs `netlify/functions/chat.js`

---

## 🔐 ENVIRONMENT VARIABLES

### Local Development (.env or secrets)
\`\`\`
GEMINI_API_KEY=your-google-gemini-api-key-here
\`\`\`

### Netlify Dashboard
Settings → Build & Deploy → Environment → Add:
\`\`\`
GEMINI_API_KEY=your-key
\`\`\`

### Firebase Config (already in code)
\`\`\`javascript
const firebaseConfig = {
  apiKey: "AIzaSyDvH9LgrwaEyxV9Y07Z6sKTePSFZKKDacE",
  authDomain: "adima-ai-8dcb1.firebaseapp.com",
  projectId: "adima-ai-8dcb1",
  storageBucket: "adima-ai-8dcb1.firebasestorage.app",
  messagingSenderId: "1013216053455",
  appId: "1:1013216053455:web:cc7f3300eb5f22971d4fba"
};
\`\`\`

---

## 📦 HOW TO INSTALL & RUN

### Local Development

\`\`\`bash
# 1. Clone repository
git clone https://github.com/Adima232AB/Adima-ai.git
cd Adima-ai

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Create .env.local
echo "GEMINI_API_KEY=your-key-here" > .env

# 4. Run locally
netlify dev

# Runs on http://localhost:8888
\`\`\`

### Deploy to Netlify

\`\`\`bash
# 1. Connect repository to Netlify
netlify init

# 2. Add environment variable
netlify env:set GEMINI_API_KEY "your-key-here"

# 3. Deploy
netlify deploy --prod
\`\`\`

---

## 🎯 HOW TO MODIFY/EXTEND

### Add New Template
Edit `js/app.js`, find `TEMPLATE_CATEGORIES`:

\`\`\`javascript
const TEMPLATE_CATEGORIES = [
  {
    category: "Your Category",
    items: [
      { 
        icon: "🎯", 
        label: "Your Template", 
        prompt: "Your prompt text..." 
      }
    ]
  }
];
\`\`\`

### Change AI Model
Edit `netlify/functions/chat.js`, line 25:

\`\`\`javascript
const MODEL = "gemini-2.0-pro";  // Change this
\`\`\`

### Modify Theme Colors
Edit `css/style.css`, lines 1-15:

\`\`\`css
:root {
  --bg: #07110e;           /* Background color */
  --accent: #10b981;       /* Main color */
  --accent2: #34d399;      /* Lighter variant */
  --text: #f5f8f6;         /* Text color */
  /* ... etc */
}
\`\`\`

### Add Dark/Light Mode
Complete `js/theme.js`:

\`\`\`javascript
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle('light-mode');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Add to CSS
:root.light-mode {
  --bg: #ffffff;
  --text: #000000;
  /* ... */
}
\`\`\`

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Add GEMINI_API_KEY to Netlify environment variables
- [ ] Test all auth methods (Email, Google, Facebook, Phone OTP)
- [ ] Test content generation
- [ ] Test export functionality (TXT, DOC, PDF)
- [ ] Test on mobile (responsive)
- [ ] Check offline handling
- [ ] Monitor Gemini API usage
- [ ] Setup custom domain (if needed)

---

## 🐛 COMMON ISSUES & FIXES

### Issue: "Gemini API: 404 model not found"
**Solution**: Update MODEL name in `netlify/functions/chat.js`
Check available models at: https://ai.google.dev/models

### Issue: "Firebase auth not working"
**Solution**: Check if API key is correct in `js/firebase-config.js`

### Issue: "History not saving"
**Solution**: Check browser storage limits (usually 5-10MB per domain)

### Issue: "Export not working"
**Solution**: Check browser console for errors. Some browsers may block downloads.

---

## 📞 SUPPORT & NEXT STEPS

### Add Firestore for Persistent History
\`\`\`javascript
// Save to Firestore instead of localStorage
await db.collection('users').doc(userId).collection('history').add({
  question, answer, timestamp: new Date()
});
\`\`\`

### Add Payment/Subscription
Integrate Stripe or Razorpay in frontend

### Add More Export Formats
Add .docx, .xlsx support

### Add Team Collaboration
Allow sharing content between users

---

**Prepared: September 5, 2026**
**Version: 1.0**
**Language: 80% JavaScript, 18.3% CSS, 1.7% HTML**


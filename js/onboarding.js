// Minimal onboarding flow: two-step modal (name then interests)
// Exposes window.handlePostLogin(user)

async function createOnboardingModal(user, profile) {
  // Reuse glass-card styles for consistency
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.background = 'rgba(0,0,0,.5)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '600';

  const card = document.createElement('div');
  card.className = 'glass-card';
  card.style.maxWidth = '520px';
  card.style.width = '100%';
  card.style.padding = '20px';
  card.style.borderRadius = '20px';

  // Step containers
  const step1 = document.createElement('div');
  const step2 = document.createElement('div');
  step2.style.display = 'none';

  // Step1 - name
  step1.innerHTML = `
    <h2 style="margin-top:0">Welcome — tell us your name</h2>
    <div style="display:flex; gap:8px; margin-top:12px;">
      <input id="onbFirst" class="input" placeholder="First name" />
      <input id="onbLast" class="input" placeholder="Last name" />
    </div>
    <div style="text-align:right; margin-top:12px;">
      <button id="onbToStep2" class="cta">Continue</button>
    </div>
  `;

  // Step2 - interests
  const interests = ['Script Writer','YouTube SEO & Optimization','Content Creator','Blogger','Social Media Manager','Marketer','Video Editor','Other'];
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(2,1fr)';
  grid.style.gap = '8px';
  grid.style.marginTop = '12px';
  interests.forEach(i => {
    const cardI = document.createElement('div');
    cardI.className = 'feature';
    cardI.style.padding = '10px';
    cardI.style.cursor = 'pointer';
    cardI.textContent = i;
    cardI.dataset.value = i;
    cardI.onclick = () => {
      cardI.classList.toggle('selected-onb');
      if (cardI.classList.contains('selected-onb')) {
        cardI.style.background = 'var(--accent)';
        cardI.style.color = '#062018';
      } else {
        cardI.style.background = '';
        cardI.style.color = '';
      }
    };
    grid.appendChild(cardI);
  });

  step2.appendChild(document.createElement('h2')).textContent = 'Aap kis cheez mein interested hain?';
  step2.appendChild(grid);
  const finishRow = document.createElement('div');
  finishRow.style.textAlign = 'right';
  finishRow.style.marginTop = '12px';
  finishRow.innerHTML = `<button id="onbFinish" class="cta">Finish</button>`;
  step2.appendChild(finishRow);

  card.appendChild(step1);
  card.appendChild(step2);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // Pre-fill if profile available
  if (profile && profile.displayName) {
    const parts = profile.displayName.split(' ');
    const f = document.getElementById('onbFirst');
    const l = document.getElementById('onbLast');
    if (parts[0]) f.value = parts[0];
    if (parts.slice(1).length) l.value = parts.slice(1).join(' ');
  }

  document.getElementById('onbToStep2').onclick = () => {
    step1.style.display = 'none';
    step2.style.display = 'block';
  };

  document.getElementById('onbFinish').onclick = async () => {
    const first = document.getElementById('onbFirst').value.trim();
    const last = document.getElementById('onbLast').value.trim();
    const selected = Array.from(grid.querySelectorAll('.feature'))
      .filter(n => n.classList.contains('selected-onb'))
      .map(n => n.dataset.value);

    // Save to Firestore
    try {
      const db = firebase.firestore();
      const docRef = db.collection('users').doc(user.uid);
      await docRef.set({
        firstName: first || null,
        lastName: last || null,
        interests: selected,
        onboardingComplete: true,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error('Onboarding save error', err);
    }

    document.body.removeChild(overlay);
  };
}

window.handlePostLogin = async function(user) {
  try {
    const db = firebase.firestore();
    const docRef = db.collection('users').doc(user.uid);
    const snap = await docRef.get();
    const data = snap.exists ? snap.data() : {};
    if (!data.onboardingComplete) {
      await createOnboardingModal(user, user);
    }
  } catch (err) {
    console.error('handlePostLogin error', err);
  }
};

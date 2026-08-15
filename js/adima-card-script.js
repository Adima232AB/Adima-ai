// Minimal interactive behavior. Hook this into your page bundle or place before </body>
(function () {
  const input = document.getElementById('adima-input');
  const sendBtn = document.getElementById('send-btn');
  const attachBtn = document.getElementById('attach-btn');
  const fileInput = document.getElementById('file-input');
  const quickBtns = document.querySelectorAll('.qa-btn');

  if (!input || !sendBtn) return;

  sendBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) {
      input.focus();
      return;
    }
    // TODO: Replace with your query send / assistant integration
    console.log('Send to Adima:', text);
    // visual feedback
    sendBtn.disabled = true;
    setTimeout(() => { sendBtn.disabled = false; }, 600);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });

  attachBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    // TODO: handle attached files
    console.log('Files attached:', e.target.files);
  });

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      switch (action) {
        case 'search':
          input.value = '';
          input.placeholder = 'Search the web with Adima…';
          input.focus();
          break;
        case 'create-image':
          input.value = '';
          input.placeholder = 'Describe the image you want to create…';
          input.focus();
          break;
        case 'analyze-image':
          input.value = '';
          input.placeholder = 'Upload an image to analyze or paste an image URL…';
          input.focus();
          break;
        case 'summarize':
          input.value = '';
          input.placeholder = 'Paste or type text to summarize…';
          input.focus();
          break;
        default:
          input.placeholder = 'Ask anything';
      }
    });
  });
})();

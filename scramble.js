// scramble.js
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Global initialization function
window.initTextScramble = function(selector, texts, delay = 800) {
    const el = document.querySelector(selector);
    if (!el) return;
    
    const fx = new TextScramble(el);
    let counter = 0;
    
    const next = () => {
        fx.setText(texts[counter]).then(() => {
            setTimeout(next, delay);
        });
        counter = (counter + 1) % texts.length;
    };
    
    next();
};

window.initSingleTextScramble = function(selector, text, delay = 0) {
    const els = document.querySelectorAll(selector);
    els.forEach(el => {
        const fx = new TextScramble(el);
        setTimeout(() => {
            fx.setText(text || el.innerText);
        }, delay);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Run scrambles if the elements exist on the page
    
    // Mobile Page specific
    const mobileHeadline = document.querySelector('.scramble-mobile-headline');
    if (mobileHeadline) {
        initSingleTextScramble('.scramble-mobile-headline', 'Hello user, welcome!', 500);
    }
    const mobileDesc = document.querySelector('.scramble-mobile-desc');
    if (mobileDesc) {
        initSingleTextScramble('.scramble-mobile-desc', 'Initiating direct neural link. Analyzing biometric markers and setting up secure encrypted protocol for data synchronization.', 1000);
    }

    // Connect Page specific
    initSingleTextScramble('.scramble-link-1', 'Instagram', 500);
    initSingleTextScramble('.scramble-link-2', 'LinkedIn', 700);
    initSingleTextScramble('.scramble-link-3', 'GitHub', 900);
    initSingleTextScramble('.scramble-session', 'Session ID', 1100);
    initSingleTextScramble('.scramble-email', 'Email', 1300);
});

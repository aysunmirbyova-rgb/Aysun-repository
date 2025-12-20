<<<<<<< HEAD
// --- PAGE INDICATOR AUTO-HIDE ON MOBILE ---
function hideIndicatorMobile() {
  setTimeout(() => {
    document.getElementById('page-indicator')?.classList.add('hide-mobile');
  }, 5000);
}

if (window.matchMedia('(max-width: 600px)').matches) {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', hideIndicatorMobile);
  } else {
    hideIndicatorMobile();
  }
}

// --- KEYBOARD NAVIGATION ---
document.addEventListener('keydown', (e) => {
  if (window.innerWidth <= 600) {
    if (e.key === 'ArrowUp') {
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    } else if (e.key === 'ArrowDown') {
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    }
  } else {
    if (e.key === 'ArrowLeft') {
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    } else if (e.key === 'ArrowRight') {
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    }
  }
});

// --- SWIPE NAVIGATION & PULL-TO-REFRESH PREVENTION ---


function handleSwipe() {
  if (window.innerWidth <= 600) {
    const swipeDistance = touchendY - touchstartY;
    if (Math.abs(swipeDistance) < swipeThreshold) return;
    if (swipeDistance < 0) { // Swiped up
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    } else { // Swiped down
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    }
  } else {
    const swipeDistance = touchendX - touchstartX;
    if (Math.abs(swipeDistance) < swipeThreshold) return;
    if (swipeDistance < 0) { // Swiped left
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    } else { // Swiped right
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    }
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
}, { passive: false });

document.addEventListener('touchmove', e => {
  if (window.innerWidth <= 600) {
    const currentY = e.changedTouches[0].screenY;
    if (window.scrollY === 0 && currentY > touchstartY) {
      e.preventDefault();
    }
  }
}, { passive: false });

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  handleSwipe();
}, { passive: true });

// --- MOUSE WHEEL NAVIGATION (Desktop) ---
let isThrottled = false;
document.addEventListener('wheel', (e) => {
  if (window.innerWidth > 600 && !isThrottled) {
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 1000);

    if (e.deltaY > 0) { // Scrolled down
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    } else { // Scrolled up
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    }
  }
}, { passive: true });


// --- PAGE INDICATOR AUTO-HIDE ON MOBILE ---
function hideIndicatorMobile() {
  setTimeout(() => {
    document.getElementById('page-indicator')?.classList.add('hide-mobile');
  }, 5000);
}

if (window.matchMedia('(max-width: 600px)').matches) {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', hideIndicatorMobile);
  } else {
    hideIndicatorMobile();
  }
}

// --- KEYBOARD NAVIGATION ---
document.addEventListener('keydown', (e) => {
  if (window.innerWidth <= 600) {
    if (e.key === 'ArrowUp') {
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    } else if (e.key === 'ArrowDown') {
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    }
  } else {
    if (e.key === 'ArrowLeft') {
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    } else if (e.key === 'ArrowRight') {
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    }
  }
});

// --- SWIPE NAVIGATION & PULL-TO-REFRESH PREVENTION ---
let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;
const swipeThreshold = 50;

function handleSwipe() {
  if (window.innerWidth <= 600) {
    const swipeDistance = touchendY - touchstartY;
    if (Math.abs(swipeDistance) < swipeThreshold) return;
    if (swipeDistance < 0) { // Swiped up
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    } else { // Swiped down
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    }
  } else {
    const swipeDistance = touchendX - touchstartX;
    if (Math.abs(swipeDistance) < swipeThreshold) return;
    if (swipeDistance < 0) { // Swiped left
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    } else { // Swiped right
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    }
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
}, { passive: false });

document.addEventListener('touchmove', e => {
  if (window.innerWidth <= 600) {
    const currentY = e.changedTouches[0].screenY;
    if (window.scrollY === 0 && currentY > touchstartY) {
      e.preventDefault();
    }
  }
}, { passive: false });

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  handleSwipe();
}, { passive: true });

// --- MOUSE WHEEL NAVIGATION (Desktop) ---
let isThrottled = false;
document.addEventListener('wheel', (e) => {
  if (window.innerWidth > 600 && !isThrottled) {
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 1000);

    if (e.deltaY > 0) { // Scrolled down
      const next = document.querySelector('.arrow.next');
      if (next) window.location.href = next.href;
    } else { // Scrolled up
      const prev = document.querySelector('.arrow.prev');
      if (prev) window.location.href = prev.href;
    }
  }
}, { passive: true });

// --- 1. INITIALIZE AOS ---
// This line comes from your original HTML script tag
AOS.init({duration: 900, once: true});

// --- 2. SMOOTH SCROLL ---
// This also comes from your original HTML script tag
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- 3. ANIMATED BLOB ---
// This is the new code for the cursor effect
const blob = document.getElementById('blob');

window.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    
    // Use requestAnimationFrame for a smoother, more performant animation
    window.requestAnimationFrame(() => {
        // Set the CSS variables that the blob uses to position itself
        blob.style.setProperty('--x', clientX + 'px');
        blob.style.setProperty('--y', clientY + 'px');
    });
});
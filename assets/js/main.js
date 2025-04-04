// function isChromeBrowser() {
//     const isChromium = window.chrome;
//     const winNav = window.navigator;
//     const vendorName = winNav.vendor;
//     const isOpera = typeof window.opr !== "undefined";
//     const isIEedge = winNav.userAgent.indexOf("Edg") > -1;
//     const isIOSChrome = winNav.userAgent.match("CriOS");

//     if (isIOSChrome) {
//         console.log('Chrome for iOS detected');
//         return true;
//     }
    
//     if (isChromium !== null && typeof isChromium !== "undefined" && 
//         vendorName === "Google Inc." && !isOpera && !isIEedge) {
//         console.log('Desktop Chrome detected');
//         console.log('User Agent:', navigator.userAgent);
//         console.log('Vendor:', navigator.vendor);
//         return true;
//     }
    
//     console.log('Not Chrome browser');
//     console.log('User Agent:', navigator.userAgent);
//     console.log('Vendor:', navigator.vendor);
//     return false;
// }

function toggleTheme() {
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const sunIcon = toggle.querySelector('.sun-icon');
    const moonIcon = toggle.querySelector('.moon-icon');
    
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        html.setAttribute('style', 'color-scheme: light');
        localStorage.setItem('theme', 'light');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        html.setAttribute('style', 'color-scheme: dark');
        localStorage.setItem('theme', 'dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Check for Chrome browser
    // if (isChromeBrowser()) {
    //     document.documentElement.classList.add('chrome');
    //     // Add chrome class to all video elements
    //     const videos = document.querySelectorAll('video');
    //     console.log('Found video elements:', videos.length);
    //     videos.forEach(video => {
    //         video.classList.add('chrome');
    //         console.log('Added chrome class to video:', video);
    //     });
    // }

    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const sunIcon = toggle.querySelector('.sun-icon');
    const moonIcon = toggle.querySelector('.moon-icon');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        html.setAttribute('style', `color-scheme: ${savedTheme}`);
        if (savedTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            html.setAttribute('style', 'color-scheme: dark');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            html.setAttribute('style', 'color-scheme: light');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    // --- Pokedex Modal Logic ---
    const pokedexToggle = document.getElementById('pokedex-toggle');
    const modal = document.getElementById('pokedex-modal');
    const closeModalButton = document.getElementById('modal-close-button');
    const pokedexIframe = document.getElementById('pokedex-iframe');

    // --- Configuration ---
    const pokedexUrl = 'https://pokedex.maliglow.com/';
    // Automatically get the origin from the URL for verification
    const pokedexOrigin = new URL(pokedexUrl).origin; // Should be 'https://pokedex.maliglow.com'

    // --- Event Listeners (for opening/closing via click) ---
    if (pokedexToggle && modal && closeModalButton && pokedexIframe) {
        // Open modal when the toggle element is clicked
        pokedexToggle.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            // Basic check if the URL is set
            if (pokedexUrl === '') {
                 alert('Pokedex URL is not configured in main.js!');
                 return;
            }

            // Add a timestamp query parameter to bypass browser cache
            const cacheBustedUrl = `${pokedexUrl}?t=${Date.now()}`;
            pokedexIframe.src = cacheBustedUrl; // Set iframe source

            modal.classList.add('is-active'); // Show modal
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close modal with the close button
        closeModalButton.addEventListener('click', () => {
            closeModal();
        });

        // Close modal by clicking on the background overlay
        modal.addEventListener('click', (event) => {
            // Only close if the click is directly on the modal overlay itself
            if (event.target === modal) {
                closeModal();
            }
        });
    } else {
        // Log an error if any required modal elements weren't found
        console.error('Modal elements not found. Check IDs: pokedex-toggle, pokedex-modal, modal-close-button, pokedex-iframe.');
    }

    // --- Helper Function to Close Modal ---
    function closeModal() {
        // Check if elements exist before manipulating them
        if (modal && pokedexIframe) {
            modal.classList.remove('is-active'); // Hide modal
            // Clear iframe src to stop potential background activity (e.g., sounds)
            // and ensure it reloads fresh next time
            pokedexIframe.src = 'about:blank';
            document.body.style.overflow = '';
        }
    }

    // --- Listener for Messages from Iframe ---
    window.addEventListener('message', (event) => {
        // 1. Verify Origin - IMPORTANT SECURITY STEP
        if (event.origin !== pokedexOrigin) {
            // console.warn(`Ignoring message from unexpected origin: ${event.origin}`); // Optional logging
            return; // Exit if origin doesn't match
        }

        // 2. Verify Data - Check if it's the message we expect
        if (event.data === 'escapePressed') {
            console.log('Received escapePressed message from iframe.');
            // 3. Check if modal is active before closing
            const modalIsActive = modal && modal.classList.contains('is-active');
            if (modalIsActive) {
                 console.log('Closing modal based on iframe message.');
                 closeModal();
            }
        } else {
            // console.log(`Received unknown message from ${event.origin}:`, event.data); // Optional logging
        }
    });

    // Optional: Close modal with the Escape key (Parent listener)
    // This might now be redundant if the iframe handles Escape when focused,
    // but can serve as a fallback if focus is somehow returned to the parent.
    // It shouldn't cause issues as closeModal checks if the modal is already closed implicitly.
    window.addEventListener('keydown', (event) => {
        const modalIsActive = modal && modal.classList.contains('is-active');
        if (event.key === 'Escape' && modalIsActive) {
            // Check if focus is potentially inside the iframe - might not be reliable
            // let isFocusInsideIframe = (document.activeElement === pokedexIframe);
            // console.log(`Parent Escape key listener. Focus in iframe? ${isFocusInsideIframe}`);

            // Avoid closing if the message listener likely already handled it,
            // or just let closeModal handle idempotency. For simplicity, just call closeModal.
             console.log('Parent Escape key listener triggered, closing modal.');
            closeModal();
        }
    });
    // --- End Pokedex Modal Logic ---

}); 
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
}); 
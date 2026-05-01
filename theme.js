// theme.js
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const toggles = document.querySelectorAll('.toggle-checkbox');
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine initial state
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    // Apply initial state to html
    if (isDark) {
        htmlElement.classList.remove('light-theme');
    } else {
        htmlElement.classList.add('light-theme');
    }

    // Apply initial state to toggles
    toggles.forEach(toggle => {
        toggle.checked = isDark;
        
        toggle.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            
            if (isChecked) {
                htmlElement.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                htmlElement.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            }
            
            // Sync all toggles on the page
            toggles.forEach(t => {
                if (t !== e.target) t.checked = isChecked;
            });
        });
    });
});

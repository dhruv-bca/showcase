// loader.js
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    const loaderOverlays = document.querySelectorAll('.quantum-loader-overlay');
    
    videos.forEach((video, index) => {
        const overlay = loaderOverlays[index];
        if (!overlay) return;

        // Check buffer periodically
        const checkBuffer = setInterval(() => {
            if (video.duration > 0) {
                let bufferedEnd = 0;
                for (let i = 0; i < video.buffered.length; i++) {
                    if (video.buffered.end(i) > bufferedEnd) {
                        bufferedEnd = video.buffered.end(i);
                    }
                }
                
                // Hide loader if buffered half or more, or if video already playing significantly
                if (bufferedEnd >= video.duration / 2 || video.currentTime > 0.5) {
                    clearInterval(checkBuffer);
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 500);
                }
            }
        }, 100);

        // Fallback: hide if it can play through
        video.addEventListener('canplaythrough', () => {
            clearInterval(checkBuffer);
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        });
        
        // Safety timeout (hide after 5s regardless)
        setTimeout(() => {
            clearInterval(checkBuffer);
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }, 5000);
    });
});

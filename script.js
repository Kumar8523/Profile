 const profileWindow = document.getElementById('profileWindow');
        const windowHeader = document.getElementById('windowHeader');
        const profileContent = document.getElementById('profileContent');
        const closeBtn = document.getElementById('closeBtn');
        const minimizeBtn = document.getElementById('minimizeBtn');
        const expandBtn = document.getElementById('expandBtn');
        const funFactBtn = document.getElementById('funFactBtn');
        const funFactText = document.getElementById('funFactText');

        let isDragging = false;
        let offsetX, offsetY;
        let isMinimized = false;
        let originalHeight = profileWindow.offsetHeight;

        // Make window draggable
        windowHeader.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - profileWindow.getBoundingClientRect().left;
            offsetY = e.clientY - profileWindow.getBoundingClientRect().top;
            profileWindow.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            profileWindow.style.position = 'fixed';
            profileWindow.style.left = `${e.clientX - offsetX}px`;
            profileWindow.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            profileWindow.style.cursor = 'default';
        });

        // Window controls
        closeBtn.addEventListener('click', () => {
            profileWindow.style.transform = 'scale(0.9)';
            profileWindow.style.opacity = '0';
            setTimeout(() => {
                document.body.innerHTML = '<div style="text-align: center; padding-top: 40vh; color: #868e96;">Window closed</div>';
            }, 200);
        });

        minimizeBtn.addEventListener('click', () => {
            if (isMinimized) {
                profileContent.style.display = 'block';
                profileWindow.style.height = originalHeight + 'px';
            } else {
                profileContent.style.display = 'none';
                profileWindow.style.height = '48px';
            }
            isMinimized = !isMinimized;
        });

        expandBtn.addEventListener('click', () => {
            if (profileWindow.style.width === '90%') {
                profileWindow.style.width = '340px';
                profileWindow.style.height = originalHeight + 'px';
            } else {
                profileWindow.style.width = '90%';
                profileWindow.style.maxWidth = '500px';
            }
        });

        // Fun fact toggle
        funFactBtn.addEventListener('click', () => {
            funFactBtn.classList.add('hidden');
            funFactText.classList.remove('hidden');
        });
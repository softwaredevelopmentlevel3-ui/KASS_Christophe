
       
        const faders = document.querySelectorAll('.fade');

        function showVisibleElements() {
            faders.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    el.classList.add('show');
                }
            });
        }

        window.addEventListener('scroll', showVisibleElements);
        window.addEventListener('load', showVisibleElements);

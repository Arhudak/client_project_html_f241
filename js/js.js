const footer = document.querySelector('footer');
        const date = new Date();
        footer.innerHTML += `<p>&copy; ${date.getFullYear()} University of Michigan. All Rights Reserved.</p>`;

        // Handle scroll direction for footer visibility
        let lastScrollY = window.scrollY;
        const footerElem = document.getElementById('footer');

        window.addEventListener('scroll', function () {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                footerElem.classList.add('show');
            } else {
                // Scrolling up
                footerElem.classList.remove('show');
            }
            lastScrollY = window.scrollY;
        });
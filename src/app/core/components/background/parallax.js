export const parallax = (e) => {
    const parallaxContainer$$ = document.querySelector('[data-parallax]');
    const parallax$$ = parallaxContainer$$.children;
    for (let n = 0; n < parallax$$.length; n++) {
        let element = parallax$$[n];
        const depthIndex = element.getAttribute('data-depth');
        const speedIndex = element.getAttribute('data-speed');
        const halfX = (window.innerWidth / 2);
        const halfY = (window.innerHeight / 2);
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const initialX = - element.offsetWidth / 2;
        const initialY = - element.offsetHeight / 2;
        let posX = (halfX - mouseX) * depthIndex / 100;
        let posY = (halfY - mouseY) * depthIndex / 100;

        if (window.innerWidth > 992) {
            if (depthIndex) {
                element.style.transform = `translate(${posX + initialX}px,${posY + initialY}px)`;
                element.style.transition = `transform ${speedIndex}s ease-out`;
            }
        }

    }

}
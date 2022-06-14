document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope'),
        evUpWindow = document.querySelector('.envelope__up-window'),
        evLink = document.querySelector('.envelope__link'),
        evBottomWindow = document.querySelector('.envelope__bottom-window'),
        postcard = document.querySelector('.postcard');

    evLink.addEventListener('click', () => {
        evLink.classList.add('disappear-link');
        evUpWindow.classList.add('shift-up');
        evBottomWindow.classList.add('shift-down');
        setTimeout(() => {
            envelope.classList.add('envelope-hide')
        }, 2500);
        setTimeout(() => {
            postcard.classList.remove('postcard-hide')
        }, 1800);
        setTimeout(() => {
            postcard.classList.add('postcard-show')
        }, 2000);
        
    });

    

});
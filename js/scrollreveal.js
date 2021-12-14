elementsReveal();

function elementsReveal() {
    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.label__description', { 
        duration: 1000,
    });
    sr.reveal('.label__title', { 
        origin: 'top', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.label__button-div', { 
        origin: 'bottom', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.label__back-poster', { 
        origin: 'right', 
        duration: 1500,
        distance : '50px',
        easing: 'ease'
    });
    sr.reveal('.navbar', { 
        origin: 'top', 
        duration: 2000,
        distance : '50px',
        easing: 'ease'
    });
    sr.reveal('.sidebar', { 
        origin: 'left', 
        duration: 1000,
        distance : '50px',
        easing: 'ease'
    });
    sr.reveal('.label__poster-flipper', { 
        origin: 'bottom', 
        duration: 1500,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.about__title', { 
        origin: 'top', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.about__description', { 
        origin: 'left', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.about__statistics', { 
        origin: 'top', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.about__photo', { 
        origin: 'right', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });

    sr.reveal('.shows__title', { 
        origin: 'top', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.shows__photo', { 
        origin: 'bottom', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.ratings', { 
        origin: 'bottom', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.partners', { 
        origin: 'bottom', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.shows__photo', { 
        origin: 'bottom', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
    sr.reveal('.contacts__title', { 
        origin: 'bottom', 
        duration: 1000,
        distance : '30px',
        easing: 'ease'
    });
}
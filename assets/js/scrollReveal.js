
/* ScrollReveat */
ScrollReveal().reveal('.imagenes',{delay: 500});
ScrollReveal().reveal('.video',{delay: 500});
ScrollReveal().reveal('.adopta',{delay: 500});

function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
  }
  
  document.addEventListener('scroll', updateProgressBar);
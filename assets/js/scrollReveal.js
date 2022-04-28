
/* ScrollReveat */
ScrollReveal().reveal('.imagenes',{delay: 300});
ScrollReveal().reveal('.video',{delay: 300});
ScrollReveal().reveal('.adopta',{delay: 300});

function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
  }
  
  document.addEventListener('scroll', updateProgressBar);
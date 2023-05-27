const navbar = document.querySelector('.navbar');
      
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
          navbar.classList.add('small');
        } else {
          navbar.classList.remove('small');
        }
      });


window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop>50||document.documentElement.scrollTop>50){
        document.getElementById("myImg").style.height= "50px";
        document.getElementById("myImg").style.width="50px";
        document.getElementById("myImg").style.padding="10px";
    }
    else{
        document.getElementById("myImg").style.height="80px";
        document.getElementById("myImg").style.width="80px";
        document.getElementById("myImg").style.padding="20px";
       }
}


const slideInImages = document.querySelectorAll('.slide-in');
const slideeInImages = document.querySelectorAll('.slidee-in');

function checkSlideIn() {
  slideInImages.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;
    const imgBottom = img.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (imgTop < windowHeight && imgBottom >= 0) {
      img.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkSlideIn);
window.addEventListener('load', checkSlideIn);

function checkSlideeIn() {
    slideeInImages.forEach(img => {
      const imgTop = img.getBoundingClientRect().top;
      const imgBottom = img.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      if (imgTop < windowHeight && imgBottom >= 0) {
        img.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', checkSlideeIn);
  window.addEventListener('load', checkSlideeIn);
 
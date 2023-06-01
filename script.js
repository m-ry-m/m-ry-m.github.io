//Changes the title of the webpage when the user leaves the tag
let docTitle = document.title;
window.addEventListener("blur",()=> {
    document.title= "Come back!";
});

window.addEventListener("focus",() => {
    document.title= docTitle;
});

//Changes the height and width of the navigationbar when sccrolling down
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
//Changes the height and width of the image when scrolling down
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

//adds the animation to the elements when we scroll to their position
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
 
//When the user submits the info they can see that their info is submitted
const clicked = document.getElementById("clicked");
clicked.addEventListener("click", function(){
  document.getElementById("text").innerHTML="Your Info is submitted!";
});
document.getElementById("nm").addEventListener("click", function(){
  document.getElementById("text").innerHTML=" ";
});
document.getElementById("em").addEventListener("click", function(){
  document.getElementById("text").innerHTML=" ";
});
document.getElementById("sb").addEventListener("click", function(){
  document.getElementById("text").innerHTML=" ";
});
document.getElementById("ms").addEventListener("click", function(){
  document.getElementById("text").innerHTML=" ";
})

//Takes the user to the top of the page when clicking the designated button
function topFun(){
  document.documentElement.scrollTop = 0;
}
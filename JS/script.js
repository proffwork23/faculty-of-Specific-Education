let span = document.querySelector(".up");

window.onscroll = function () {
 console.log(this.scrollY);
 if (this.scrollY >= 40) {
   span.classList.add("show");
 } else {
   span.classList.remove("show");
   }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

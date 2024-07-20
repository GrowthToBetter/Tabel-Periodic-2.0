
const Button = document.querySelector(`#hamburger-menu`);
Button.addEventListener("click", function (e) {
  const navbar = document.querySelector(".navbar-nav-menu");
  navbar.classList.toggle("active");
});


const PhotoProfil=document.querySelector('#Button')
PhotoProfil.addEventListener('click',()=>{
  open("/Auth", "_self")
})


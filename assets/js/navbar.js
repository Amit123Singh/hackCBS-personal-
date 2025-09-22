const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// to open menu 
hamburger.addEventListener("click",(e)=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    e.stopPropagation();
    
})

// to close menu -> click anywhere in the body
document.body.addEventListener("click",(e=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");       
    }
    ))


// Prevent clicks on menu from closing the menu
navMenu.addEventListener("click", (e) => {
    e.stopPropagation(); 
});
    

// click on links -> will also close the menu now
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    e.stopPropagation();
  });
});




// For navbar scroll event

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});






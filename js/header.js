document.addEventListener("DOMContentLoaded", () => {
   // handle click events in document
   document.body.addEventListener("click", (e) => {
      if (e.target.closest(".burger-container")) {
         let menu = document.querySelector(".menu");
         document.querySelector(".burger-container").classList.toggle("active");
         menu.classList.toggle("active");
         document.body.classList.toggle("disabled");
      }
      if (e.target.classList.contains("link")) {
         let menu = document.querySelector(".menu");
         menu.classList.remove("active");
         document.querySelector(".burger-container").classList.remove("active");
         document.body.classList.remove("disabled");
      }
   });
});
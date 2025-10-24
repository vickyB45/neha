    // Navbar section 
      const menuBtn = document.getElementById("menu-btn");
      const closeBtn = document.getElementById("close-menu");
      const mobileMenu = document.getElementById("mobile-menu");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
      });

      closeBtn.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });


      
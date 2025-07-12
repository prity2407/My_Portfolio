
      const themeToggle = document.getElementById("theme-toggle");
      const body = document.body;
      const icon = themeToggle.querySelector("i");

      themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");

        // Update the icon based on theme
        if (body.classList.contains("light-theme")) {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
        } else {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
        }
      });


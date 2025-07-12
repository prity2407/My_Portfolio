//script for contact form 

  (function () {
    emailjs.init("y-qZipjcvRpN8jY75"); // Replace with your public key
  })();
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("from_name");
  const emailInput = document.getElementById("from_email");
  const messageInput = document.getElementById("message");

  const nameMsg = document.getElementById("name-msg");
  const emailMsg = document.getElementById("email-msg");
  const messageMsg = document.getElementById("message-msg");
  const status = document.getElementById("form-status");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //  Real-time validation
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length >= 3) {
      nameInput.classList.add("valid");
      nameInput.classList.remove("invalid");
      nameMsg.textContent = "";
    } else {
      nameInput.classList.add("invalid");
      nameInput.classList.remove("valid");
      nameMsg.textContent = "Name must be at least 3 characters.";
    }
  });

  emailInput.addEventListener("input", () => {
    if (emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add("valid");
      emailInput.classList.remove("invalid");
      emailMsg.textContent = "";
    } else {
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
      emailMsg.textContent = "Please enter a valid email.";
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim().length >= 10) {
      messageInput.classList.add("valid");
      messageInput.classList.remove("invalid");
      messageMsg.textContent = "";
    } else {
      messageInput.classList.add("invalid");
      messageInput.classList.remove("valid");
      messageMsg.textContent = "Message must be at least 10 characters.";
    }
  });

  // Form submission with validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length < 3) {
      Swal.fire("Oops!", "Please enter a name with at least 3 characters.", "warning");
      return;
    }

    if (!emailPattern.test(email)) {
      Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
      return;
    }

    if (message.length < 10) {
      Swal.fire("Too Short", "Message should be at least 10 characters.", "info");
      return;
    }

    // Sending...
    status.innerText = "Sending...";

    emailjs.sendForm("service_ks60do6", "template_qu3yut6", this)
      .then(() => {
        status.innerText = "";
        this.reset();

        Swal.fire({
          title: "✅ Message Sent!",
          text: "Thank you for reaching out. I'll get back to you soon.",
          icon: "success",
          confirmButtonText: "Great!",
          confirmButtonColor: "#4CAF50",
          background: "#1a1a2e",
          color: "#ffffff",
          customClass: {
            popup: "animated fadeInDown faster"
          }
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        status.innerText = "❌ Failed to send message.";

        Swal.fire({
          title: "❌ Failed!",
          text: "Message could not be sent. Please try again later.",
          icon: "error",
          confirmButtonText: "Retry",
          confirmButtonColor: "#dc3545",
          background: "#1a1a2e",
          color: "#ffffff"
        });
      });
  });


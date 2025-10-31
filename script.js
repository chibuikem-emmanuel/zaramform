function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send("service_ubq9dhi", "template_krrlqjk", templateParams)
    .then(() => alert("Email went successfully").catch(() => alert("Error sending email:", error)));
}
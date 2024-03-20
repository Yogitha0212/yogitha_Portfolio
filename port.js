document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    const number = event.target.elements.number.value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Number",number);
  });
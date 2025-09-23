// Fade in & fade out effect for cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else {
          entry.target.classList.remove("fade-in");
          entry.target.classList.add("fade-out");
        }
      });
    }, { threshold: 0.2 });
  
    cards.forEach(card => observer.observe(card));
  });
  
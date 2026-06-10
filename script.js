document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      const targetId = link.getAttribute('href');

      if (targetId.length > 1) {
        event.preventDefault();
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

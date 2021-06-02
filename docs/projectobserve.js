const options = {
  threshold: [0.8]
};
const target = document.querySelectorAll('.jsobserve');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
}
const observer = new IntersectionObserver(handleIntersection, options);
target.forEach(target => {
  observer.observe(target, options);
}, options);

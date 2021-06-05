const config = {
  threshold: [0.1]
};
const target2 = document.querySelector('.jscontain');

function handleIntersect(entries2) {
  entries2.map((entry2) => {
    if (entry2.isIntersecting) {
      target2.classList.add('show')
      observer2.unobserve(entry2.target)
    } else {
      target2.classList.remove('show')
    }
  });
}
const observer2 = new IntersectionObserver(handleIntersect, config);
target.forEach(target2 => {
  observer2.observe(target2, config);
}, config);
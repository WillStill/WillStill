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


/* 
    var images = document.getElementsByClassName('project'); //Gets elements (images)
    var srcList = []; //Creates an array
        for (i = 0; i < images.length; i++) {
            srcList.push(images[i].src); //Adds images to array    
        }
        for (i = 0; i < srcList.length; i++) {
            setTimeout(function(){ console.log("Hello"); }, 3000);
        }


var project = document.querySelectorAll(".pcontain a"),
i = 1;
Array.prototype.forEach.call(project, function (project) {
setTimeout(function () {
project.classList.add("visible");
}, 700 * i);
i++;
});

*/
/*  Creamos la lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation  */
const Campo = document.getElementById('campo1');
const url = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
function NewElement(element) {
    return document.createElement(element);
}

/* function append(parent, el) {
return parent.appendChild(el);
} */
fetch(url)
.then((resp) => resp.json())
.then(data => {
  // Anadimos los datos al elemento
  document.getElementById('campo1').innerHTML =data.name;
});
console.log(data);


/* var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroolToTop").style.display = "block";
  } else {
    document.getElementById("scroolToTop").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
} */
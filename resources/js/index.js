/*  Creamos la lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation  */
const newCampo1 = document.getElementById('campo1');
const url = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
function NewElement(element) {
    return document.createElement(element);

}
function append(parent, el) {
return parent.appendChild(el);
}
fetch(url)
.then((resp) => resp.json())
.then(function (data) {  
    let campoOne = data.results;
    return campoOne.map(function(campo){
        console.log(campo);
let h3 = createNode("h3");
let p = createNode ("p");
append(h3, "name");
append(p, "description" );

    })
  })
  .catch(function(error) {
    console.log(error);
    
  });




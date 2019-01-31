// mon evenement: onmousseover
// J'appelle ma fonction "changeBorder"
function changeBorder() {
  // je veux mettre mon bord d'image à 3 px et en rouge du coup je mets la propriété : .style.border
document.getElementById('image1').style.border = '3px solid red';
}
// mon evenement: onmousseout
// J'appelle ma fonction "initialBorder"
function initialBorder() {
// avec ma propriété je réinitialise mon bord : initial
document.getElementById('image1').style.border = 'initial';
}

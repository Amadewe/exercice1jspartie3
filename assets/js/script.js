// mon evenement: onMousseOver
// J'appelle ma fonction "changeborder"
function changeborder() {
  // je veux mettre mon bord d'image à 3 px et rouge du coup je mets la propriété : .style.border
document.getElementById('image1').style.border = '3px solid red';
}
// mon evenement: onMousseOut
// J'appelle ma fonction "initialborder"
function initialborder() {
// avec ma propriété je résinialiser mon bord : initial 
document.getElementById('image1').style.border = 'initial';
}

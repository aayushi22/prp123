let iconElement = document.getElementById('iconTrash');
let modalElement = document.getElementById('myModal');
//let closeElement = document.getElementsByClassName('close')[0];

// Open the modal when the icon is clicked
iconElement.addEventListener('click', function() {
  modalElement.style.display = 'block';
});


// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target == modalElement) {
    modalElement.style.display = 'none';
  }
});
function remove(){
  const delCard = document.getElementById(card);
  delCard.parentNode.removeChild(delCard);
}

function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.addEventListener('click', function(event) {
    event.preventDefault();
    button.setAttribute('hidden', true);
  });
}

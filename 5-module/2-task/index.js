function toggleText() {
  const text = document.querySelector('#text');
  const button = document.querySelector('.toggle-text-button');

  button.addEventListener('click', function(event) {
    event.preventDefault();
    if (!text.hasAttribute('hidden')) {
      text.setAttribute('hidden', true);
      return;
    } 
    text.removeAttribute('hidden');
  });
}

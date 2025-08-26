window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('loader').classList.add('d-none');
    document.getElementById('main-content').classList.remove('d-none');
  }, 900);
});

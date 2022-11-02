function showPage() {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 1000);
}

//Adicionando as animações na list de necessidades
function startListAnimation(entries, observer) {
  entries.forEach(entry => {
    var listItems = document.querySelectorAll('.list-item');
    if (entry.isIntersecting) {
      return listItems.forEach((item, index) => setTimeout(() => item.classList.add('show'), index * 500))
    }

    return listItems.forEach((item, index) => setTimeout(() => item.classList.remove('show'), index * 500))
  })
}

//observer options
var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

function init() {
  let observer = new IntersectionObserver(startListAnimation, options);
  let detalhes = document.getElementById('detalhes');

  observer.observe(detalhes);
}

init();
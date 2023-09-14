const list = document.querySelectorAll('.list-item');
const listItems = document.querySelectorAll('.list-item');


function activelink() {
    list.forEach(function(item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
}

list.forEach(e => {
    e.addEventListener('click', activelink)
});


const list = document.querySelectorAll('.list-item');
const listItems = document.querySelectorAll('.list-item');
const indicator = document.querySelector('.indicator');

function setIndicatorPosition() {
  const activeItem = document.querySelector('.list-item.active');
  
  if (activeItem) {
    const index = Array.from(listItems).indexOf(activeItem);
    
    const position = index * 5.3;
    
    indicator.style.transform = `translateX(calc(${position}rem))`;
  }
}

setIndicatorPosition();

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(item => item.classList.remove('active'));
    
    item.classList.add('active');
    
    setIndicatorPosition();
  });
});


function activelink() {
    list.forEach(function(item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
}

list.forEach(e => {
    e.addEventListener('click', activelink)
});

